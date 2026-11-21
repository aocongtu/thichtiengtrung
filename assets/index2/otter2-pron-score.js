/* ============================================================
   OTTER2 PRONUNCIATION SCORING (additive 2026-11-17)
   Nang cap cham diem phat am o khu Luyen phat am (tab "Ghi am
   luyen tap", module inline #ttcPronunciationOverlay). Module
   goc KHONG bi sua; file nay chi HOOK cong them:
   - Module goc da ghi am (MediaRecorder) + chay SpeechRecognition
     zh-CN va ghi ket qua tho vao #ttcPracticeStatus ("May nghe
     duoc: ..."). Diem cu cua no chi la 1 so Levenshtein tren
     chu Han + verdict chung chung, khong co thanh dieu.
   - File nay: (1) bat blob ghi am ma module goc vua tao trong
     #ttcPracticeAudio -> giai ma PCM -> phan tich cao do F0
     (autocorrelation) theo tung am tiet -> cham THANH DIEU +
     TROi CHAY; (2) lay transcript tu dong trang thai cua module
     goc -> can chinh Levenshtein CO BACKTRACE theo tung chu
     (dung / thay bang chu gi / thieu / thua) -> cham NOI DUNG;
     (3) render panel chi tiet ngay duoi dong trang thai: 3 diem
     thanh phan (Noi dung / Thanh dieu / Troi chay) + nhan xet
     cu the bang tieng Viet + goi y sua 1-2 diem yeu nhat.
   - Fallback trung thuc: trinh duyet khong co SpeechRecognition
     -> muc Noi dung ghi ro chua ho tro (van cham thanh dieu +
     troi chay + nghe lai de tu doi chieu); may khong nghe ro ->
     noi dung de trong kem ly do, khong gia vo co diem.
   - Quyen micro: file nay KHONG tu xin micro; no chi dung lai
     ban ghi module goc da thu khi nguoi dung bam Ghi am.
   ============================================================ */
(function () {
  "use strict";

  /* ================= 1) Pure core ================= */

  function hanOnly(text) {
    return String(text || "").replace(/[^\u3400-\u9fff]/g, "");
  }

  /* Levenshtein alignment WITH backtrace.
     Returns per-target-char ops: ok / sub (heard char) / del,
     plus inserted heard chars (extras), correct count, score. */
  function alignChars(target, heard) {
    var a = hanOnly(target).split("");
    var b = hanOnly(heard).split("");
    var n = a.length, m = b.length;
    var dp = [], i, j;
    for (i = 0; i <= n; i++) { dp.push(new Array(m + 1).fill(0)); dp[i][0] = i; }
    for (j = 0; j <= m; j++) dp[0][j] = j;
    for (i = 1; i <= n; i++) {
      for (j = 1; j <= m; j++) {
        var cost = a[i - 1] === b[j - 1] ? 0 : 1;
        dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
      }
    }
    var ops = [], extras = [];
    i = n; j = m;
    while (i > 0 || j > 0) {
      if (i > 0 && j > 0 && a[i - 1] === b[j - 1] && dp[i][j] === dp[i - 1][j - 1]) {
        ops.push({ type: "ok", target: a[i - 1], heard: b[j - 1] }); i--; j--;
      } else if (i > 0 && j > 0 && dp[i][j] === dp[i - 1][j - 1] + 1) {
        ops.push({ type: "sub", target: a[i - 1], heard: b[j - 1] }); i--; j--;
      } else if (i > 0 && dp[i][j] === dp[i - 1][j] + 1) {
        ops.push({ type: "del", target: a[i - 1], heard: null }); i--;
      } else if (j > 0 && dp[i][j] === dp[i][j - 1] + 1) {
        extras.push(b[j - 1]); j--;
      } else if (i > 0 && j > 0) {
        ops.push({ type: "sub", target: a[i - 1], heard: b[j - 1] }); i--; j--;
      } else if (i > 0) {
        ops.push({ type: "del", target: a[i - 1], heard: null }); i--;
      } else {
        extras.push(b[j - 1]); j--;
      }
    }
    ops.reverse(); extras.reverse();
    var correct = 0;
    ops.forEach(function (op) { if (op.type === "ok") correct++; });
    return {
      ops: ops, extras: extras, correct: correct,
      targetLen: n, heardLen: m,
      score: n ? Math.round((correct / n) * 100) : 0
    };
  }

  /* ---------- Pinyin: tone marks, syllable splitting ---------- */
  var TONE_OF = {};
  (function () {
    var groups = [
      ["a", "āáǎà", "a"], ["e", "ēéěè", "e"], ["i", "īíǐì", "i"],
      ["o", "ōóǒò", "o"], ["u", "ūúǔù", "u"], ["ü", "ǖǘǚǜ", "ü"]
    ];
    groups.forEach(function (g) {
      for (var k = 0; k < 4; k++) TONE_OF[g[1][k]] = { base: g[2], tone: k + 1 };
    });
  })();
  function baseChar(ch) {
    if (TONE_OF[ch]) return TONE_OF[ch].base;
    if (ch === "v") return "ü";
    return ch;
  }
  function toneOfChar(ch) { return TONE_OF[ch] ? TONE_OF[ch].tone : 0; }

  var INITIALS = ["zh", "ch", "sh", "b", "p", "m", "f", "d", "t", "n", "l",
    "g", "k", "h", "j", "q", "x", "r", "z", "c", "s", "y", "w"];
  var FINALS = ["iang", "iong", "uang", "iao", "ian", "ing", "uai", "uan",
    "ang", "eng", "ong", "ia", "ie", "iu", "in", "ua", "uo", "ui", "un",
    "üe", "üan", "ün", "ue", "ai", "ei", "ao", "ou", "an", "en", "er",
    "a", "o", "e", "i", "u", "ü"];

  /* Split ONE unspaced chunk (e.g. "zhōngguórén") into syllables.
     Returns array of {raw, base, tone} or null when unparseable. */
  function splitChunk(chunk) {
    var s = String(chunk || "").toLowerCase().replace(/^\d+/, "");
    if (!s) return [];
    var out = [];
    var pos = 0;
    while (pos < s.length) {
      var rest = s.slice(pos);
      var digitTone = 0;
      var initLen = 0;
      for (var ii = 0; ii < INITIALS.length; ii++) {
        var ini = INITIALS[ii];
        if (rest.indexOf(ini) === 0) {
          var after = rest.slice(ini.length);
          // initial is only valid if a final follows
          if (after && /[aeiouü]/.test(baseChar(after[0]))) { initLen = ini.length; break; }
          if (ini === "y" || ini === "w") { initLen = ini.length; break; }
        }
      }
      var finLen = 0, finTone = 0;
      var restBase = rest.slice(initLen).split("").map(baseChar).join("");
      for (var fi = 0; fi < FINALS.length; fi++) {
        var fin = FINALS[fi];
        if (restBase.indexOf(fin) === 0) { finLen = fin.length; break; }
      }
      if (!finLen) {
        // erhua trailing r attaches to previous syllable
        if (rest[0] === "r" && out.length && rest.length === 1) {
          out[out.length - 1].raw += "r"; out[out.length - 1].base += "r"; pos++; continue;
        }
        return null;
      }
      var span = rest.slice(0, initLen + finLen);
      var tone = 0;
      span.split("").forEach(function (ch) { var t = toneOfChar(ch); if (t) tone = t; });
      var nextCh = s[pos + initLen + finLen];
      if (nextCh && /[1-5]/.test(nextCh)) { digitTone = Number(nextCh); pos++; }
      if (digitTone) tone = digitTone === 5 ? 0 : digitTone;
      out.push({
        raw: span,
        base: span.split("").map(baseChar).join(""),
        tone: tone || 5
      });
      pos += initLen + finLen;
    }
    return out;
  }

  /* Split a full example pinyin string into syllables.
     Returns array of syllables or null when any chunk fails. */
  function splitPinyin(pinyin) {
    var text = String(pinyin || "").replace(/[。！？；：、,.!?;:…·—「」『』"“”()（）]/g, " ");
    var chunks = text.split(/[\s'’]+/).filter(Boolean);
    var out = [];
    for (var i = 0; i < chunks.length; i++) {
      var part = splitChunk(chunks[i]);
      if (!part) return null;
      out = out.concat(part);
    }
    return out;
  }

  /* Display pinyin with tone mark re-applied (for feedback text). */
  var MARK = { a: "āáǎà", e: "ēéěè", i: "īíǐì", o: "ōóǒò", u: "ūúǔù", "ü": "ǖǘǚǜ" };
  function withToneMark(base, tone) {
    if (!tone || tone === 5) return base;
    var vowels = ["a", "e", "o", "i", "u", "ü"];
    var idx = -1, v = null;
    if (base.indexOf("a") >= 0) { v = "a"; idx = base.indexOf("a"); }
    else if (base.indexOf("e") >= 0) { v = "e"; idx = base.indexOf("e"); }
    else if (base.indexOf("ou") >= 0) { v = "o"; idx = base.indexOf("ou"); }
    else {
      for (var i = vowels.length - 1; i >= 0; i--) {
        var at = base.lastIndexOf(vowels[i]);
        if (at >= 0) { v = vowels[i]; idx = at; break; }
      }
    }
    if (idx < 0) return base;
    return base.slice(0, idx) + MARK[v][tone - 1] + base.slice(idx + 1);
  }

  /* ---------- F0 extraction (autocorrelation) ---------- */
  function downsample(pcm, sr, targetSr) {
    if (sr <= targetSr) return { pcm: pcm, sr: sr };
    var factor = Math.max(1, Math.round(sr / targetSr));
    var outLen = Math.floor(pcm.length / factor);
    var out = new Float32Array(outLen);
    for (var i = 0; i < outLen; i++) {
      var sum = 0;
      for (var k = 0; k < factor; k++) sum += pcm[i * factor + k];
      out[i] = sum / factor;
    }
    return { pcm: out, sr: Math.round(sr / factor) };
  }

  function autoPitch(frame, sr) {
    var len = frame.length, rms = 0, i, lag;
    for (i = 0; i < len; i++) rms += frame[i] * frame[i];
    rms = Math.sqrt(rms / len);
    if (rms < 0.008) return { f0: 0, rms: rms, corr: 0 };
    var minLag = Math.max(2, Math.floor(sr / 450));
    var maxLag = Math.min(len - 2, Math.ceil(sr / 55));
    var corrs = [], bestLag = -1, bestCorr = 0;
    for (lag = minLag; lag <= maxLag; lag++) {
      var num = 0, e1 = 0, e2 = 0, n = len - lag;
      for (i = 0; i < n; i++) {
        num += frame[i] * frame[i + lag];
        e1 += frame[i] * frame[i];
        e2 += frame[i + lag] * frame[i + lag];
      }
      var corr = num / (Math.sqrt(e1 * e2) + 1e-12);
      corrs[lag] = corr;
      if (corr > bestCorr) { bestCorr = corr; bestLag = lag; }
    }
    if (bestLag < 0 || bestCorr < 0.5) return { f0: 0, rms: rms, corr: bestCorr };
    /* Octave guard: prefer the smallest lag whose correlation is nearly
       as good as the best (avoids half-frequency subharmonic picks). */
    for (lag = minLag; lag < bestLag; lag++) {
      if (corrs[lag] >= 0.6 && corrs[lag] >= bestCorr - 0.08) { bestLag = lag; break; }
    }
    return { f0: sr / bestLag, rms: rms, corr: bestCorr };
  }

  /* Frame the PCM: 40ms window / 10ms hop at ~16kHz. */
  function extractFrames(pcmIn, srIn) {
    var ds = downsample(pcmIn, srIn, 16000);
    var pcm = ds.pcm, sr = ds.sr;
    var win = Math.round(sr * 0.04), hop = Math.round(sr * 0.01);
    var frames = [];
    var peak = 0;
    for (var i = 0; i < pcm.length; i++) peak = Math.max(peak, Math.abs(pcm[i]));
    for (var start = 0; start + win <= pcm.length; start += hop) {
      var p = autoPitch(pcm.subarray(start, start + win), sr);
      frames.push({ t: (start + win / 2) / sr, f0: p.f0, rms: p.rms, corr: p.corr });
    }
    return { frames: frames, sr: sr, peak: peak, duration: pcm.length / sr };
  }

  function median(arr) {
    if (!arr.length) return 0;
    var s = arr.slice().sort(function (a, b) { return a - b; });
    var mid = Math.floor(s.length / 2);
    return s.length % 2 ? s[mid] : (s[mid - 1] + s[mid]) / 2;
  }

  /* Speech segments + pauses from frames (energy + voicing). */
  function speechSegments(frames) {
    var voiced = frames.filter(function (f) { return f.f0 > 0; });
    if (!voiced.length) return null;
    var maxRms = 0;
    frames.forEach(function (f) { maxRms = Math.max(maxRms, f.rms); });
    var thr = Math.max(0.012, maxRms * 0.18);
    var active = frames.map(function (f) { return f.rms >= thr; });
    var first = -1, last = -1, i;
    for (i = 0; i < frames.length; i++) if (active[i]) { if (first < 0) first = i; last = i; }
    if (first < 0) return null;
    var pauses = [], gapStart = -1;
    for (i = first; i <= last; i++) {
      if (!active[i] && gapStart < 0) gapStart = i;
      if (active[i] && gapStart >= 0) {
        var dur = frames[i].t - frames[gapStart].t;
        if (dur >= 0.25) pauses.push({ at: frames[gapStart].t, dur: dur });
        gapStart = -1;
      }
    }
    return {
      start: frames[first].t, end: frames[last].t,
      totalDur: frames[last].t - frames[first].t,
      pauses: pauses,
      pauseTime: pauses.reduce(function (s, p) { return s + p.dur; }, 0)
    };
  }

  function stOf(f0, ref) { return 12 * Math.log2(f0 / ref); }

  /* Per-syllable contour features from frames inside [t0, t1]. */
  function syllableFeatures(frames, t0, t1, refF0) {
    var inside = frames.filter(function (f) { return f.t >= t0 && f.t < t1; });
    var voicedF = inside.filter(function (f) { return f.f0 > 0; });
    var dur = t1 - t0;
    if (!voicedF.length) {
      return { dur: dur, voicedRatio: 0, ok: false };
    }
    var stsAll = voicedF.map(function (f) { return stOf(f.f0, refF0); });
    /* Drop wild F0 outliers (octave jumps) before measuring the contour. */
    var medAll = median(stsAll);
    var kept = voicedF.filter(function (f, i) { return Math.abs(stsAll[i] - medAll) <= 5; });
    if (kept.length >= 3) voicedF = kept;
    var sts = voicedF.map(function (f) { return stOf(f.f0, refF0); });
    /* Start/end measured on the steady middle portions, not the ramps. */
    var nSt = sts.length;
    var sFrom = Math.floor(nSt * 0.1), sTo = Math.max(sFrom + 1, Math.floor(nSt * 0.45));
    var eFrom = Math.floor(nSt * 0.55), eTo = Math.max(eFrom + 1, Math.floor(nSt * 0.92));
    var startSt = median(sts.slice(sFrom, sTo));
    var endSt = median(sts.slice(eFrom, eTo));
    var minSt = Math.min.apply(null, sts), maxSt = Math.max.apply(null, sts);
    var minIdx = sts.indexOf(minSt);
    // least-squares slope (semitones per second)
    var n = voicedF.length, sx = 0, sy = 0, sxx = 0, sxy = 0;
    voicedF.forEach(function (f, i) {
      var x = f.t, y = sts[i];
      sx += x; sy += y; sxx += x * x; sxy += x * y;
    });
    var denom = n * sxx - sx * sx;
    var slope = denom ? (n * sxy - sx * sy) / denom : 0;
    var rmsSum = 0;
    inside.forEach(function (f) { rmsSum += f.rms; });
    return {
      dur: dur, ok: true,
      voicedRatio: voicedF.length / Math.max(1, inside.length),
      startSt: startSt, endSt: endSt, minSt: minSt, maxSt: maxSt,
      levelSt: median(sts), slope: slope,
      minPos: n > 1 ? minIdx / (n - 1) : 0.5,
      delta: endSt - startSt, range: maxSt - minSt,
      meanRms: rmsSum / Math.max(1, inside.length)
    };
  }

  /* Contour shape classification (features in semitones rel. to speaker median). */
  function classifyShape(f, medDur) {
    if (!f || !f.ok || f.voicedRatio < 0.3) return "unknown";
    if (f.dur < 0.55 * medDur && f.levelSt <= 1.2 && f.range < 3.2) return "short";
    var dips = f.minSt <= Math.min(f.startSt, f.endSt) - 1.2 &&
      f.minPos >= 0.2 && f.minPos <= 0.9 && f.endSt >= f.minSt + 1.0;
    if (dips) return "dipping";
    if (f.levelSt <= -2.2 && Math.abs(f.delta) <= 2.4) return "low";
    if (f.delta >= 1.8 && f.slope > 1.2) return "rising";
    if (f.delta <= -1.8 && f.slope < -1.2) return "falling";
    if (Math.abs(f.delta) <= 1.8 && f.range <= 3.4) return "flat";
    if (f.delta > 0) return "rising";
    if (f.delta < 0) return "falling";
    return "flat";
  }

  var SHAPE_VI = {
    flat: "ngang đều", rising: "đi lên", falling: "đi xuống",
    dipping: "trũng xuống rồi lên", low: "trầm và thấp", short: "rất ngắn, nhẹ",
    unknown: "chưa rõ"
  };
  var TONE_NEED_VI = {
    1: "cao và ngang đều", 2: "đi lên ở cuối âm",
    3: "hạ xuống thấp rồi hơi lên", 4: "rơi mạnh xuống", 5: "ngắn và nhẹ"
  };
  /* Scoring matrix: expected tone x observed shape -> 0..1 */
  var TONE_MATRIX = {
    1: { flat: 1.0, rising: 0.35, falling: 0.30, dipping: 0.25, low: 0.45, short: 0.40 },
    2: { flat: 0.30, rising: 1.0, falling: 0.10, dipping: 0.45, low: 0.35, short: 0.40 },
    3: { flat: 0.30, rising: 0.35, falling: 0.45, dipping: 1.0, low: 0.75, short: 0.40 },
    4: { flat: 0.25, rising: 0.05, falling: 1.0, dipping: 0.30, low: 0.30, short: 0.40 },
    5: { flat: 0.55, rising: 0.30, falling: 0.35, dipping: 0.30, low: 0.60, short: 1.0 }
  };
  function scoreTone(expected, shape) {
    if (shape === "unknown") return null;
    var row = TONE_MATRIX[expected] || TONE_MATRIX[5];
    var v = row[shape];
    return typeof v === "number" ? v : 0.3;
  }

  /* ---------- Fluency ---------- */
  function scoreFluency(syllableCount, seg) {
    if (!seg || !syllableCount) return null;
    var total = Math.max(0.1, seg.totalDur);
    var rate = syllableCount / total; // syllables per second
    var score = 100;
    var bandLo = 1.7, bandHi = 3.4; // comfortable learner band
    if (rate > bandHi) score -= Math.min(45, (rate - bandHi) * 38);
    if (rate < bandLo) score -= Math.min(45, (bandLo - rate) * 38);
    var longPauses = seg.pauses.filter(function (p) { return p.dur >= 0.4; });
    score -= Math.min(30, longPauses.length * 8);
    var pauseRatio = seg.pauseTime / total;
    if (pauseRatio > 0.35) score -= 10;
    score = Math.max(0, Math.min(100, Math.round(score)));
    return {
      score: score, rate: rate, totalDur: total,
      longPauses: longPauses.length, pauseRatio: pauseRatio,
      tooFast: rate > bandHi, tooSlow: rate < bandLo
    };
  }

  /* ---------- Full PCM analysis: tones + fluency ----------
     syllables: [{raw, base, tone}] aligned 1:1 with target hanzi. */
  function analyzePCM(pcm, sr, syllables) {
    var ex = extractFrames(pcm, sr);
    var frames = ex.frames;
    var seg = speechSegments(frames);
    var out = { tone: null, fluency: null, seg: seg, duration: ex.duration };
    if (!seg || !syllables || !syllables.length) return out;
    out.fluency = scoreFluency(syllables.length, seg);
    var voicedF0 = frames.filter(function (f) { return f.f0 > 0; })
      .map(function (f) { return f.f0; });
    if (voicedF0.length < 8) return out;
    var refF0 = median(voicedF0);
    var n = syllables.length;
    var span = seg.end - seg.start;
    var medDur = span / n;
    var per = [], scored = 0, sum = 0;
    for (var i = 0; i < n; i++) {
      var t0 = seg.start + (span * i) / n;
      var t1 = seg.start + (span * (i + 1)) / n;
      var feat = syllableFeatures(frames, t0, t1, refF0);
      var shape = classifyShape(feat, medDur);
      var sc = scoreTone(syllables[i].tone, shape);
      if (sc !== null) { scored++; sum += sc; }
      per.push({
        index: i, syllable: syllables[i], shape: shape,
        shapeVi: SHAPE_VI[shape], score: sc, feat: feat
      });
    }
    if (scored >= Math.ceil(n / 2)) {
      out.tone = {
        score: Math.round((sum / scored) * 100),
        perSyllable: per, scoredCount: scored, totalCount: n
      };
    } else {
      out.tone = { score: null, perSyllable: per, scoredCount: scored, totalCount: n };
    }
    return out;
  }

  /* ---------- Objective feedback (Vietnamese, data-driven) ---------- */
  function buildFeedback(a) {
    var comments = [], tips = [];
    var wrongChars = [], wrongTones = [];
    if (a.content && a.content.alignment) {
      var al = a.content.alignment;
      al.ops.forEach(function (op, i) {
        if (op.type === "sub") {
          wrongChars.push(op);
          comments.push("Chữ 「" + op.target + "」" + pyNote(a, i) +
            " — máy nghe thành 「" + op.heard + "」, hãy đọc lại chữ này cho rõ.");
        } else if (op.type === "del") {
          wrongChars.push(op);
          comments.push("Thiếu chữ 「" + op.target + "」" + pyNote(a, i) +
            " — máy không nghe thấy chữ này trong bài đọc của bạn.");
        }
      });
      if (al.extras.length) {
        comments.push("Máy nghe thấy âm thừa: 「" + al.extras.join("、") +
          "」 — có thể bạn đọc thêm hoặc phát âm chưa dứt khoát.");
      }
      if (!wrongChars.length && !al.extras.length && al.targetLen) {
        comments.push("Nội dung: máy nghe khớp cả " + al.targetLen +
          "/" + al.targetLen + " chữ với câu mẫu.");
      }
    }
    if (a.tone && a.tone.perSyllable) {
      a.tone.perSyllable.forEach(function (p) {
        if (p.score !== null && p.score < 0.6) {
          wrongTones.push(p);
          comments.push("Âm 「" + withToneMark(p.syllable.base, p.syllable.tone) +
            "」 (thanh " + p.syllable.tone + "): bạn đọc " + p.shapeVi +
            ", trong khi thanh " + p.syllable.tone + " cần " +
            TONE_NEED_VI[p.syllable.tone] + ".");
        }
      });
      if (!wrongTones.length && a.tone.score !== null) {
        comments.push("Thanh điệu: không phát hiện âm nào lệch thanh rõ rệt trong lần đọc này.");
      }
    }
    if (a.fluency) {
      var f = a.fluency;
      if (f.tooFast) {
        comments.push("Tốc độ: bạn đọc khoảng " + f.rate.toFixed(1) +
          " âm tiết/giây — hơi nhanh so với nhịp luyện tập (khoảng 1,7–3,4), dễ nuốt thanh.");
      } else if (f.tooSlow) {
        comments.push("Tốc độ: bạn đọc khoảng " + f.rate.toFixed(1) +
          " âm tiết/giây — hơi chậm; thử đọc liền mạch hơn một chút.");
      }
      if (f.longPauses >= 2) {
        comments.push("Bạn ngắt quãng dài " + f.longPauses +
          " lần giữa câu — hãy nghe mẫu rồi đọc liền một hơi.");
      }
    }
    /* Tips: 1-2 weakest points, parameterised by the measured data. */
    var comps = [];
    if (a.content && typeof a.content.score === "number") comps.push({ k: "content", v: a.content.score });
    if (a.tone && typeof a.tone.score === "number") comps.push({ k: "tone", v: a.tone.score });
    if (a.fluency && typeof a.fluency.score === "number") comps.push({ k: "fluency", v: a.fluency.score });
    comps.sort(function (x, y) { return x.v - y.v; });
    if (comps.length && comps[0].v < 90) {
      var weakest = comps[0].k;
      if (weakest === "content" && wrongChars.length) {
        var list = wrongChars.slice(0, 3).map(function (op) { return "「" + op.target + "」"; }).join(" ");
        tips.push("Ưu tiên luyện lại các chữ " + list +
          ": nghe mẫu từng chữ, đọc chậm và rõ khẩu hình rồi mới ghép vào câu.");
      } else if (weakest === "tone" && wrongTones.length) {
        var byTone = {};
        wrongTones.forEach(function (p) { byTone[p.syllable.tone] = (byTone[p.syllable.tone] || 0) + 1; });
        var worstTone = Object.keys(byTone).sort(function (x, y) { return byTone[y] - byTone[x]; })[0];
        tips.push("Điểm yếu lớn nhất là thanh " + worstTone + " (" + TONE_NEED_VI[worstTone] +
          "). Hãy mở tab 🎵 5 thanh điệu, nghe mẫu và đọc theo vài lần trước khi đọc lại câu.");
      } else if (weakest === "fluency") {
        tips.push("Hãy đọc theo nhịp mẫu: nghe mẫu 1 lần, đọc thầm 1 lần, rồi mới ghi âm — mục tiêu là đọc liền mạch, ít ngắt quãng.");
      }
      if (comps.length > 1 && comps[1].v < 75 && tips.length < 2) {
        if (comps[1].k === "tone" && wrongTones.length) {
          tips.push("Kèm theo: chú ý thanh của âm 「" +
            withToneMark(wrongTones[0].syllable.base, wrongTones[0].syllable.tone) +
            "」 — bạn đang đọc " + wrongTones[0].shapeVi + ".");
        } else if (comps[1].k === "content" && wrongChars.length) {
          tips.push("Kèm theo: kiểm tra lại chữ 「" + wrongChars[0].target + "」 trong câu mẫu.");
        }
      }
    }
    return { comments: comments, tips: tips, wrongChars: wrongChars, wrongTones: wrongTones };
  }
  function pyNote(a, opIndex) {
    if (a.syllables && a.syllables[opIndex]) {
      var s = a.syllables[opIndex];
      return " (" + withToneMark(s.base, s.tone) + ")";
    }
    return "";
  }

  /* ---------- Total score ---------- */
  function totalScore(a) {
    var parts = [];
    if (a.content && typeof a.content.score === "number") parts.push({ v: a.content.score, w: 0.5 });
    if (a.tone && typeof a.tone.score === "number") parts.push({ v: a.tone.score, w: 0.35 });
    if (a.fluency && typeof a.fluency.score === "number") parts.push({ v: a.fluency.score, w: 0.15 });
    if (!parts.length) return null;
    var wsum = parts.reduce(function (s, p) { return s + p.w; }, 0);
    var v = parts.reduce(function (s, p) { return s + p.v * p.w; }, 0) / wsum;
    return { value: Math.round(v), renormalized: parts.length < 3 };
  }

  /* ---------- Panel HTML (pure string builder) ---------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function bar(label, score, note) {
    var val = typeof score === "number" ? score : null;
    var pct = val === null ? 0 : val;
    var cls = val === null ? "na" : val >= 80 ? "good" : val >= 60 ? "mid" : "low";
    return '<div class="ttc-ps-row"><span class="ttc-ps-label">' + label + "</span>" +
      '<span class="ttc-ps-track"><span class="ttc-ps-fill ' + cls + '" style="width:' + pct + '%"></span></span>' +
      '<span class="ttc-ps-val">' + (val === null ? "—" : val) + "</span></div>" +
      (note ? '<div class="ttc-ps-note">' + esc(note) + "</div>" : "");
  }

  function renderResultHTML(a) {
    var fb = a.feedback || buildFeedback(a);
    var tot = totalScore(a);
    var h = "";
    h += '<div class="ttc-ps-head">🎯 Chấm điểm phát âm chi tiết</div>';
    if (tot) {
      h += '<div class="ttc-ps-total">Điểm tổng: <b>' + tot.value + "/100</b>" +
        (tot.renormalized ? ' <span class="ttc-ps-note-inline">(tính trên các phần chấm được lần này)</span>' : "") + "</div>";
    }
    /* Content */
    var contentNote = "";
    if (a.content && a.content.unavailable === "unsupported") {
      contentNote = "Trình duyệt này chưa hỗ trợ nhận dạng giọng nói tiếng Trung nên chưa chấm được nội dung — hãy dùng Chrome/Edge. Bạn vẫn được chấm thanh điệu + trôi chảy và có bản ghi ở trên để nghe lại, tự đối chiếu với câu mẫu.";
    } else if (a.content && a.content.unavailable === "unheard") {
      contentNote = "Máy chưa nghe rõ lời đọc lần này (có thể do tiếng ồn hoặc đọc hơi nhỏ) nên chưa chấm được nội dung. Hãy đọc chậm lại, gần micro hơn rồi ghi âm lại.";
    }
    h += bar("📖 Nội dung", a.content ? a.content.score : null, contentNote);
    if (a.content && a.content.alignment) {
      var al = a.content.alignment;
      h += '<div class="ttc-ps-chars">';
      al.ops.forEach(function (op) {
        if (op.type === "ok") h += '<span class="ttc-ps-ch ok" title="Đọc đúng">' + esc(op.target) + "</span>";
        else if (op.type === "sub") h += '<span class="ttc-ps-ch sub" title="Máy nghe thành ' + esc(op.heard) + '">' + esc(op.target) + "</span>";
        else h += '<span class="ttc-ps-ch del" title="Chưa nghe thấy chữ này">' + esc(op.target) + "</span>";
      });
      if (al.extras.length) {
        h += '<span class="ttc-ps-extra">+ thừa: ' + esc(al.extras.join(" ")) + "</span>";
      }
      h += "</div>";
      if (a.content.heard) {
        h += '<div class="ttc-ps-heard">🗣️ Máy nghe được: ' + esc(a.content.heard) + "</div>";
      }
    }
    /* Tone */
    var toneNote = "";
    if (a.tone && a.tone.score === null && a.tone.pinyinUnparsed) {
      toneNote = "Chưa tách được âm tiết từ pinyin của câu mẫu này nên chưa chấm được thanh điệu lần này.";
    } else if (a.tone && a.tone.score === null) {
      toneNote = "Chưa đủ dữ kiện cao độ để chấm thanh điệu lần này (bản ghi quá ngắn hoặc môi trường ồn). Hãy đọc rõ từng chữ và ghi âm lại.";
    }
    h += bar("🎵 Thanh điệu", a.tone ? a.tone.score : null, toneNote);
    if (a.tone && a.tone.perSyllable && a.tone.score !== null) {
      h += '<div class="ttc-ps-chars">';
      a.tone.perSyllable.forEach(function (p) {
        var label = withToneMark(p.syllable.base, p.syllable.tone);
        if (p.score === null) {
          h += '<span class="ttc-ps-ch na" title="Chưa rõ thanh">' + esc(label) + "</span>";
        } else if (p.score >= 0.6) {
          h += '<span class="ttc-ps-ch ok" title="Thanh ' + p.syllable.tone + ' đúng (' + esc(p.shapeVi) + ')">' + esc(label) + "</span>";
        } else {
          h += '<span class="ttc-ps-ch sub" title="Thanh ' + p.syllable.tone + ': bạn đọc ' + esc(p.shapeVi) + '">' + esc(label) + "</span>";
        }
      });
      h += "</div>";
    }
    /* Fluency */
    h += bar("🌊 Trôi chảy", a.fluency ? a.fluency.score : null,
      a.fluency ? "" : "Chưa đo được nhịp đọc lần này.");
    if (a.fluency) {
      h += '<div class="ttc-ps-heard">⏱️ Nhịp đọc đo được: ' + a.fluency.rate.toFixed(1) +
        " âm tiết/giây · ngắt quãng dài: " + a.fluency.longPauses + " lần</div>";
    }
    /* Comments + tips */
    if (fb.comments.length) {
      h += '<div class="ttc-ps-sec">📝 Nhận xét cụ thể</div><ul class="ttc-ps-list">' +
        fb.comments.map(function (c) { return "<li>" + esc(c) + "</li>"; }).join("") + "</ul>";
    }
    if (fb.tips.length) {
      h += '<div class="ttc-ps-tips"><b>🎯 Gợi ý sửa trước:</b><ul class="ttc-ps-list">' +
        fb.tips.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul></div>";
    }
    h += '<div class="ttc-ps-foot">Cách chấm: nội dung = đối chiếu câu máy nghe được với câu mẫu theo từng chữ · thanh điệu = đo đường cao độ giọng thật so với dạng thanh của pinyin mẫu · trôi chảy = nhịp đọc và ngắt quãng đo từ bản ghi.</div>';
    return h;
  }

  var API = {
    hanOnly: hanOnly, alignChars: alignChars, splitPinyin: splitPinyin,
    splitChunk: splitChunk, withToneMark: withToneMark,
    extractFrames: extractFrames, speechSegments: speechSegments,
    syllableFeatures: syllableFeatures, classifyShape: classifyShape,
    scoreTone: scoreTone, scoreFluency: scoreFluency, analyzePCM: analyzePCM,
    buildFeedback: buildFeedback, totalScore: totalScore,
    renderResultHTML: renderResultHTML, SHAPE_VI: SHAPE_VI, TONE_NEED_VI: TONE_NEED_VI
  };
  if (typeof module !== "undefined" && module.exports) module.exports = API;
  if (typeof window === "undefined") return;
  window.__OTTER2_PRON__ = API;

  /* ================= 2) Browser glue ================= */
  var PANEL_ID = "ttcPronScorePanel";
  var STYLE_ID = "ttcPronScoreStyle";
  var session = null; // {target, pinyin, syllables, heard, heardState, pcm, sr, done}

  function $(id) { return document.getElementById(id); }

  function injectStyle() {
    if ($(STYLE_ID)) return;
    var st = document.createElement("style");
    st.id = STYLE_ID;
    st.textContent =
      "#" + PANEL_ID + "{margin-top:12px;text-align:left;background:#fff7ed;border:1.5px solid #E3E8EF;border-radius:14px;padding:14px 16px;font-size:14px;line-height:1.55;color:#3f3f46}" +
      ".ttc-ps-head{font-weight:800;font-size:16px;color:#9a3412;margin-bottom:4px}" +
      ".ttc-ps-total{font-size:15px;margin-bottom:8px}" +
      ".ttc-ps-note-inline{font-size:12px;color:#78716c}" +
      ".ttc-ps-row{display:flex;align-items:center;gap:8px;margin-top:6px}" +
      ".ttc-ps-label{flex:0 0 108px;font-weight:700}" +
      ".ttc-ps-track{flex:1;height:10px;background:#e7e5e4;border-radius:99px;overflow:hidden}" +
      ".ttc-ps-fill{display:block;height:100%;border-radius:99px}" +
      ".ttc-ps-fill.good{background:#22c55e}.ttc-ps-fill.mid{background:#F97316}.ttc-ps-fill.low{background:#ef4444}.ttc-ps-fill.na{background:#d6d3d1}" +
      ".ttc-ps-val{flex:0 0 34px;text-align:right;font-weight:800}" +
      ".ttc-ps-note{font-size:12.5px;color:#92400e;background:#F7F8FA;border-radius:8px;padding:6px 9px;margin:4px 0 2px}" +
      ".ttc-ps-chars{display:flex;flex-wrap:wrap;gap:5px;margin:7px 0 2px}" +
      ".ttc-ps-ch{display:inline-block;min-width:26px;text-align:center;padding:3px 6px;border-radius:8px;font-weight:700;background:#f5f5f4}" +
      ".ttc-ps-ch.ok{background:#dcfce7;color:#166534}" +
      ".ttc-ps-ch.sub{background:#F7F8FA;color:#16283F}" +
      ".ttc-ps-ch.del{background:#e7e5e4;color:#78716c;text-decoration:line-through}" +
      ".ttc-ps-ch.na{background:#f5f5f4;color:#a8a29e}" +
      ".ttc-ps-extra{font-size:12.5px;color:#16283F;align-self:center}" +
      ".ttc-ps-heard{font-size:13px;color:#57534e;margin-top:5px}" +
      ".ttc-ps-sec{font-weight:800;margin-top:10px;color:#9a3412}" +
      ".ttc-ps-list{margin:4px 0 0;padding-left:18px}" +
      ".ttc-ps-list li{margin:2px 0}" +
      ".ttc-ps-tips{margin-top:10px;background:#F7F8FA;border-radius:10px;padding:9px 12px}" +
      ".ttc-ps-foot{margin-top:10px;font-size:11.5px;color:#a8a29e}";
    document.head.appendChild(st);
  }

  function currentTarget() {
    var hz = document.querySelector(".ttc-practice-hanzi");
    var py = document.querySelector(".ttc-practice-pinyin");
    return {
      hanzi: hz ? hz.textContent.trim() : "",
      pinyin: py ? py.textContent.trim() : ""
    };
  }

  function ensurePanel() {
    var status = $("ttcPracticeStatus");
    if (!status) return null;
    var panel = $(PANEL_ID);
    if (panel && panel.parentNode) return panel;
    injectStyle();
    panel = document.createElement("div");
    panel.id = PANEL_ID;
    panel.hidden = true;
    status.parentNode.insertBefore(panel, status.nextSibling);
    return panel;
  }

  function hasSpeechRecognition() {
    return !!(window.SpeechRecognition || window.webkitSpeechRecognition);
  }

  function newSession() {
    var t = currentTarget();
    var syll = null;
    try { syll = splitPinyin(t.pinyin); } catch (e) { syll = null; }
    var hanCount = hanOnly(t.hanzi).length;
    if (syll && syll.length !== hanCount) syll = null; // misaligned: tone scoring needs 1:1
    session = {
      target: t.hanzi, pinyin: t.pinyin, syllables: syll,
      hanCount: hanCount,
      heard: null, heardState: "pending", // pending | ok | unheard
      pcm: null, sr: 0, pcmState: "pending", rendered: false
    };
    var panel = ensurePanel();
    if (panel) { panel.hidden = true; panel.innerHTML = ""; }
  }

  function maybeRender() {
    if (!session || session.rendered) return;
    if (session.pcmState === "pending") return;
    if (session.heardState === "pending") return;
    session.rendered = true;
    var t = currentTarget();
    if (hanOnly(t.hanzi) !== hanOnly(session.target)) return; // user moved on
    var a = { syllables: session.syllables };
    /* Content */
    if (session.heardState === "ok" && session.heard) {
      var al = alignChars(session.target, session.heard);
      a.content = { score: al.score, alignment: al, heard: hanOnly(session.heard) || session.heard };
    } else if (!hasSpeechRecognition()) {
      a.content = { score: null, unavailable: "unsupported" };
    } else {
      a.content = { score: null, unavailable: "unheard" };
    }
    /* Tone + fluency from PCM */
    if (session.pcmState === "ok" && session.pcm) {
      var syllForTone = session.syllables;
      var analysis = analyzePCM(session.pcm, session.sr, syllForTone ||
        hanOnly(session.target).split("").map(function () { return { raw: "", base: "", tone: 5 }; }));
      a.fluency = analysis.fluency;
      if (syllForTone) a.tone = analysis.tone;
      else a.tone = { score: null, perSyllable: null };
      if (!syllForTone) {
        // tone unavailable because pinyin could not be split 1:1
        a.tone = { score: null, perSyllable: null, pinyinUnparsed: true };
      }
    } else {
      a.tone = { score: null, perSyllable: null };
      a.fluency = null;
    }
    a.feedback = buildFeedback(a);
    var panel = ensurePanel();
    if (!panel) return;
    panel.innerHTML = renderResultHTML(a);
    panel.hidden = false;
    /* Put the real total in the module's own status line position. */
    var tot = totalScore(a);
    var status = $("ttcPracticeStatus");
    if (status && tot) {
      status.textContent = "🎯 Điểm phát âm lần này: " + tot.value +
        "/100 — xem chấm chi tiết (nội dung · thanh điệu · trôi chảy) ngay bên dưới.";
    }
    window.__OTTER2_PRON_LAST__ = a;
  }

  /* Decode the blob the original module just recorded. */
  function captureAudio(audioEl) {
    if (!session) newSession();
    if (session.pcmState !== "pending") { session.pcmState = "pending"; session.rendered = false; }
    var src = audioEl.getAttribute("src") || "";
    if (!src || typeof fetch !== "function") { session.pcmState = "failed"; maybeRenderSoon(); return; }
    fetch(src).then(function (r) { return r.arrayBuffer(); }).then(function (buf) {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) { session.pcmState = "failed"; maybeRenderSoon(); return; }
      var ctx = new AC();
      return ctx.decodeAudioData(buf).then(function (audioBuf) {
        var len = audioBuf.length;
        var mono = new Float32Array(len);
        for (var ch = 0; ch < audioBuf.numberOfChannels; ch++) {
          var d = audioBuf.getChannelData(ch);
          for (var i = 0; i < len; i++) mono[i] += d[i] / audioBuf.numberOfChannels;
        }
        if (session) {
          session.pcm = mono; session.sr = audioBuf.sampleRate;
          session.pcmState = "ok";
        }
        if (ctx.close) ctx.close();
        maybeRenderSoon();
      });
    }).catch(function () {
      if (session) session.pcmState = "failed";
      maybeRenderSoon();
    });
  }

  var renderTimer = 0;
  function maybeRenderSoon() {
    if (renderTimer) clearTimeout(renderTimer);
    renderTimer = setTimeout(function () {
      /* If the transcript never resolves, stop waiting after the grace
         period handled by the status observer; here just try. */
      maybeRender();
    }, 60);
  }

  /* Watch the practice tab: status text carries the transcript;
     #ttcPracticeAudio receives the recorded blob element. */
  function watch() {
    var root = $("ttcPronContent");
    if (!root) return;
    var statusObs = new MutationObserver(function () {
      var status = $("ttcPracticeStatus");
      if (!status) return;
      var text = status.textContent || "";
      if (/Đang ghi âm/.test(text)) {
        if (!session || session.heardState !== "pending" || session.rendered) newSession();
        return;
      }
      var m = text.match(/Máy nghe được:\s*(.+)$/);
      if (m) {
        if (!session) newSession();
        if (session.heardState === "pending") {
          session.heard = m[1].trim();
          session.heardState = "ok";
          /* give the audio decode a short chance, then render anyway */
          setTimeout(function () {
            if (session && session.pcmState === "pending") session.pcmState = "failed";
            maybeRender();
          }, 2500);
          maybeRenderSoon();
        }
        return;
      }
      if (/chưa nhận ra lời đọc/.test(text)) {
        if (!session) newSession();
        if (session.heardState === "pending") {
          session.heardState = "unheard";
          setTimeout(function () {
            if (session && session.pcmState === "pending") session.pcmState = "failed";
            maybeRender();
          }, 2500);
          maybeRenderSoon();
        }
      }
    });
    statusObs.observe(root, { childList: true, subtree: true, characterData: true });

    var audioObs = new MutationObserver(function () {
      var box = $("ttcPracticeAudio");
      if (!box) return;
      var audioEl = box.querySelector("audio");
      if (audioEl && audioEl.getAttribute("src")) {
        if (!session) newSession();
        if (session.pcmState === "pending" && !audioEl.__ttcPsCaptured) {
          audioEl.__ttcPsCaptured = true;
          captureAudio(audioEl);
        }
      }
    });
    audioObs.observe(root, { childList: true, subtree: true });
  }

  var bootObs = new MutationObserver(function () {
    if ($("ttcPronContent") && $("ttcPracticeStatus")) {
      ensurePanel();
    }
    if ($("ttcPronContent") && !watch.started) { watch.started = true; watch(); }
  });
  if (document.body) bootObs.observe(document.body, { childList: true, subtree: true });
  document.addEventListener("DOMContentLoaded", function () {
    if (document.body) bootObs.observe(document.body, { childList: true, subtree: true });
    if ($("ttcPronContent") && !watch.started) { watch.started = true; watch(); }
  });

  /* Test/debug entry point: render a full analysis into the panel. */
  API.handleAnalysis = function (a) {
    var panel = ensurePanel();
    if (!panel) return false;
    panel.innerHTML = renderResultHTML(a);
    panel.hidden = false;
    return true;
  };
})();
