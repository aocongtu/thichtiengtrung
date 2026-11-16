/**
 * Otter2 dictionary — port of index.html search engine.
 * Data: OTTER2_HSK_ALL_DATA (HSK 1–9) with HSK1 alias fallback.
 */
(function () {
  "use strict";

  var RECENT_KEY = "otter2_recent_lookup_v1";
  var searchKind = "vocab";
  var searchIndex = null;
  var searchCache = null;
  var sayGen = 0;
  var bound = false;

  function $(id) {
    return document.getElementById(id);
  }

  function getWords() {
    if (window.OTTER2_HSK_ALL_DATA && Array.isArray(window.OTTER2_HSK_ALL_DATA.words)) {
      return window.OTTER2_HSK_ALL_DATA.words;
    }
    if (typeof window.otter2GetWordsForHsk === "function") {
      var all = [];
      for (var lv = 1; lv <= 9; lv++) {
        all = all.concat(window.otter2GetWordsForHsk(lv) || []);
      }
      if (all.length) return all;
    }
    var pack = window.OTTER2_HSK1_DATA;
    if (!pack || !Array.isArray(pack.words)) return [];
    return pack.words.slice();
  }

  function esc(text) {
    return String(text || "").replace(/[&<>"]/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch];
    });
  }

  function say(text) {
    if (!("speechSynthesis" in window)) {
      alert("Trình duyệt không hỗ trợ đọc tiếng Trung.");
      return;
    }
    if (!text) return;
    var gen = ++sayGen;
    try {
      speechSynthesis.cancel();
    } catch (e) {}
    var u = new SpeechSynthesisUtterance(String(text));
    u.lang = "zh-CN";
    u.rate = 0.92;
    u.pitch = 1;
    var voices = speechSynthesis.getVoices() || [];
    var zh = voices.find(function (v) {
      return /zh(-|_|$)|chinese|中文/i.test(v.lang + " " + v.name);
    });
    if (zh) u.voice = zh;
    setTimeout(function () {
      if (gen !== sayGen) return;
      try {
        speechSynthesis.speak(u);
      } catch (e2) {}
    }, 40);
  }

  function pinyinParts(folded) {
    var text = String(folded || "");
    if (!text) return [];
    if (!pinyinParts.set) {
      pinyinParts.set = {};
      "a ai an ang ao ba bai ban bang bao bei ben beng bi bian biao bie bin bing bo bu ca cai can cang cao ce cei cen ceng cha chai chan chang chao che chen cheng chi chong chou chu chua chuai chuan chuang chui chun chuo ci cong cou cu cuan cui cun cuo da dai dan dang dao de dei den deng di dia dian diao die ding diu dong dou du duan dui dun duo e ei en eng er fa fan fang fei fen feng fo fou fu ga gai gan gang gao ge gei gen geng gong gou gu gua guai guan guang gui gun guo ha hai han hang hao he hei hen heng hong hou hu hua huai huan huang hui hun huo ji jia jian jiang jiao jie jin jing jiong jiu ju juan jue jun ka kai kan kang kao ke kei ken keng kong kou ku kua kuai kuan kuang kui kun kuo la lai lan lang lao le lei leng li lia lian liang liao lie lin ling liu lo long lou lu luan lue lun luo lv ma mai man mang mao me mei men meng mi mian miao mie min ming miu mo mou mu na nai nan nang nao ne nei nen neng ni nian niang niao nie nin ning niu nong nou nu nuan nue nun nuo nv o ou pa pai pan pang pao pei pen peng pi pian piao pie pin ping po pou pu qi qia qian qiang qiao qie qin qing qiong qiu qu quan que qun ran rang rao re ren reng ri rong rou ru rua ruan rui run ruo sa sai san sang sao se sen seng sha shai shan shang shao she shei shen sheng shi shou shu shua shuai shuan shuang shui shun shuo si song sou su suan sui sun suo ta tai tan tang tao te teng ti tian tiao tie ting tong tou tu tuan tui tun tuo wa wai wan wang wei wen weng wo wu xi xia xian xiang xiao xie xin xing xiong xiu xu xuan xue xun ya yan yang yao ye yi yin ying yo yong you yu yuan yue yun za zai zan zang zao ze zei zen zeng zha zhai zhan zhang zhao zhe zhei zhen zheng zhi zhong zhou zhu zhua zhuai zhuan zhuang zhui zhun zhuo zi zong zou zu zuan zui zun zuo"
        .split(" ")
        .forEach(function (item) {
          pinyinParts.set[item] = 1;
        });
    }
    var parts = [];
    var i = 0;
    while (i < text.length) {
      var found = "";
      var max = Math.min(6, text.length - i);
      for (var size = max; size >= 1; size--) {
        var piece = text.slice(i, i + size);
        if (pinyinParts.set[piece]) {
          found = piece;
          break;
        }
      }
      if (!found) return null;
      parts.push(found);
      i += found.length;
    }
    return parts;
  }

  function partsPrefix(queryParts, wordParts) {
    if (!queryParts || !wordParts || !queryParts.length || queryParts.length > wordParts.length) return false;
    for (var i = 0; i < queryParts.length; i++) {
      if (queryParts[i] !== wordParts[i]) return false;
    }
    return true;
  }

  function foldSearch(text) {
    return String(text || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[\s'’·.。,，、/／;；]+/g, "");
  }

  function foldLoose(text) {
    return String(text || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function ensureIndex() {
    var words = getWords();
    if (searchIndex && searchIndex.length === words.length) return searchIndex;
    searchIndex = words.map(function (word, index) {
      return {
        i: index,
        word: word,
        hFold: foldSearch(word.h),
        pFold: foldSearch(word.p),
        pParts: pinyinParts(foldSearch(word.p)),
        mLoose: foldLoose(word.m),
        hvLoose: "",
        hv: ""
      };
    });
    return searchIndex;
  }

  function searchForms(raw) {
    var text = String(raw || "").trim().replace(/\s+/g, " ");
    return {
      raw: text,
      fold: foldSearch(text),
      loose: foldLoose(text),
      simpFold: foldSearch(text),
      parts: pinyinParts(foldSearch(text)),
      hanzi: /[\u3400-\u9fff]/.test(text)
    };
  }

  function rankEntry(row, q) {
    var h = row.hFold,
      p = row.pFold,
      m = row.mLoose,
      hv = row.hvLoose;
    var qh = q.simpFold,
      ql = q.loose;
    if (!qh) return 99;
    if (h === qh || p === qh || (ql && (m === ql || (row.hvLoose && hv === ql)))) return 0;
    if (q.hanzi && h.indexOf(qh) === 0) return 1;
    if (!q.hanzi && q.parts && row.pParts && q.parts.length && partsPrefix(q.parts, row.pParts))
      return q.parts.length === row.pParts.length ? 0 : 2;
    if (!q.hanzi && ql.length >= 2 && (m.indexOf(ql) === 0 || hv.indexOf(ql) === 0)) return 3;
    if (
      !q.hanzi &&
      ql.length >= 2 &&
      ((" " + m + " ").indexOf(" " + ql + " ") >= 0 || (" " + hv + " ").indexOf(" " + ql + " ") >= 0)
    )
      return 4;
    if (q.hanzi && h.indexOf(qh) > 0) return 5;
    if (!q.hanzi && qh.length >= 3 && q.parts && p.indexOf(qh) > 0) return 6;
    if (!q.hanzi && ql.length >= 2 && (m.indexOf(ql) >= 0 || hv.indexOf(ql) >= 0)) return 6;
    return 99;
  }

  function lookupWords(raw) {
    var q = searchForms(raw);
    var cacheKey = q.simpFold + "|" + q.loose + "|" + q.hanzi;
    if (searchCache && searchCache.key === cacheKey) return searchCache.rows;
    var rows = [];
    ensureIndex().forEach(function (row) {
      var rank = rankEntry(row, q);
      if (rank < 99) rows.push({ row: row, rank: rank });
    });
    rows.sort(function (a, b) {
      if (a.rank !== b.rank) return a.rank - b.rank;
      var ah = String(a.row.word.h || "").length;
      var bh = String(b.row.word.h || "").length;
      if (ah !== bh) return ah - bh;
      return a.row.i - b.row.i;
    });
    var seen = {};
    var unique = [];
    rows.forEach(function (item) {
      var word = item.row.word;
      var key = word.h + "|" + item.row.pFold + "|" + item.row.mLoose;
      if (seen[key]) return;
      seen[key] = 1;
      unique.push(item);
    });
    var strong = unique.filter(function (item) {
      return item.rank <= 4;
    });
    var pool = strong.length
      ? strong
      : unique
          .filter(function (item) {
            return item.rank <= 6;
          })
          .slice(0, 8);
    searchCache = { key: cacheKey, rows: pool };
    return pool;
  }

  function filterPoolByKind(pool, keyword, kind) {
    var list = pool || [];
    var q = searchForms(keyword);
    if (kind === "hanzi") {
      return list.filter(function (item) {
        var h = String(item.row.word.h || "");
        if (h.length === 1) return true;
        return !!(q.hanzi && h.indexOf(q.raw) >= 0);
      });
    }
    if (kind === "collocation") {
      return list.filter(function (item) {
        var h = String(item.row.word.h || "");
        return h.length > 1;
      });
    }
    if (kind === "sentence") {
      var rows = [];
      var seen = {};
      ensureIndex().forEach(function (row) {
        var w = row.word || {};
        var eg = String(w.example || "");
        var egPy = String(w.examplePinyin || "");
        var egVi = String(w.exampleMeaning || "");
        var hit = false;
        if (q.hanzi && (eg.indexOf(q.raw) >= 0 || eg.indexOf(keyword) >= 0)) hit = true;
        else if (!q.hanzi && q.loose) {
          var blob = foldLoose(eg + " " + egPy + " " + egVi);
          if (blob.indexOf(q.loose) >= 0) hit = true;
        }
        if (!hit) return;
        var key = w.h + "|" + eg;
        if (seen[key]) return;
        seen[key] = 1;
        rows.push({ row: row, rank: 2 });
      });
      return rows.slice(0, 24);
    }
    return list;
  }

  function loadRecent() {
    try {
      var raw = JSON.parse(localStorage.getItem(RECENT_KEY) || "[]");
      return Array.isArray(raw) ? raw : [];
    } catch (e) {
      return [];
    }
  }

  function rememberLookup(word) {
    if (!word || !word.h) return;
    var list = loadRecent().filter(function (item) {
      return item.h !== word.h;
    });
    list.unshift({ h: word.h, p: word.p || "", m: word.m || "", hsk: word.hsk || 1 });
    try {
      localStorage.setItem(RECENT_KEY, JSON.stringify(list.slice(0, 12)));
    } catch (e) {}
    renderRecent();
  }

  function renderRecent() {
    var box = $("otter2DictRecent");
    var input = $("otter2DictSearch");
    if (!box) return;
    var list = loadRecent();
    var open = window.__otter2RecentHold || (input && document.activeElement === input);
    box.hidden = !(open && list.length);
    box.innerHTML = list.length
      ? "<span>Vừa tra:</span>" +
        list
          .map(function (item) {
            return (
              '<button type="button" data-h="' +
              esc(item.h) +
              '" title="' +
              esc(item.m || "") +
              '">' +
              esc(item.h) +
              "</button>"
            );
          })
          .join("") +
        '<button type="button" data-clear-recent="1">Xóa lịch sử</button>'
      : "";
  }

  function hideExtras() {
    var suggest = $("otter2DictSuggest");
    var status = $("otter2DictStatus");
    var detail = $("otter2DictDetail");
    var clearBtn = $("otter2DictClear");
    var input = $("otter2DictSearch");
    if (suggest) {
      suggest.hidden = true;
      suggest.innerHTML = "";
    }
    if (status) {
      status.hidden = true;
      status.textContent = "";
    }
    if (detail) {
      detail.hidden = true;
      detail.innerHTML = "";
    }
    if (clearBtn) clearBtn.hidden = !(input && input.value);
    if (input) input.setAttribute("aria-expanded", "false");
    var results = $("otter2DictResults");
    if (results) results.hidden = true;
  }

  function paintSuggestions(pool) {
    var box = $("otter2DictSuggest");
    var input = $("otter2DictSearch");
    if (!box) return;
    if (!pool.length) {
      box.hidden = false;
      box.innerHTML = '<div class="otter2-dict-sg-empty">Không thấy từ này trong kho HSK 1–9.</div>';
      if (input) input.setAttribute("aria-expanded", "true");
      return;
    }
    box.innerHTML = pool
      .slice(0, 8)
      .map(function (item, index) {
        var word = item.row.word;
        return (
          '<button type="button" role="option" data-h="' +
          esc(word.h) +
          '"' +
          (index === 0 ? ' class="ttc-on"' : "") +
          '><span class="ttc-sg-hz">' +
          esc(word.h) +
          "</span>" +
          (word.p ? '<span class="ttc-sg-py">' + esc(word.p) + "</span>" : "") +
          (word.hsk ? '<em class="ttc-sg-lv">HSK ' + esc(word.hsk) + "</em>" : "") +
          (word.m ? '<span class="ttc-sg-mn">' + esc(word.m) + "</span>" : "") +
          "</button>"
        );
      })
      .join("");
    box.hidden = false;
    if (input) input.setAttribute("aria-expanded", "true");
  }

  function paintDetail(pool) {
    var box = $("otter2DictDetail");
    if (!box) return;
    if (!pool.length) {
      box.hidden = true;
      box.innerHTML = "";
      return;
    }
    var top = pool[0].row;
    var same = [];
    pool.forEach(function (item) {
      if (item.row.word.h === top.word.h) same.push(item.row);
    });
    var html =
      '<article class="ttc-dict"><div class="ttc-dict-head"><div class="ttc-dict-head-main"><div class="han">' +
      esc(top.word.h) +
      "</div>";
    if (top.word.p) html += '<div class="ttc-dict-py">' + esc(top.word.p) + "</div>";
    html +=
      '</div><button type="button" class="ttc-dict-speak" data-say="' +
      esc(top.word.h) +
      '" aria-label="Phát âm">🔊</button></div>';
    same.forEach(function (row, senseIndex) {
      var word = row.word;
      var glosses = String(word.m || "")
        .split(/\s*[;；/／、]\s*|\s*,\s*/)
        .map(function (part) {
          return part.trim();
        })
        .filter(Boolean);
      html += '<section class="ttc-sense">';
      html += '<div class="ttc-sense-top"><span class="ttc-sense-no">' + (senseIndex + 1) + "</span>";
      if (word.t) html += '<span class="ttc-pos">' + esc(word.t) + "</span>";
      if (word.hsk) html += '<span class="ttc-hsk">HSK ' + esc(word.hsk) + "</span>";
      html += "</div>";
      if (word.p && same.length > 1) html += '<div class="ttc-dict-py">' + esc(word.p) + "</div>";
      if (glosses.length) {
        html +=
          '<ol class="ttc-mean">' +
          glosses
            .map(function (part) {
              return "<li>" + esc(part) + "</li>";
            })
            .join("") +
          "</ol>";
      }
      if (word.explanation) html += '<p class="ttc-note">' + esc(word.explanation) + "</p>";
      if (word.example || word.examplePinyin || word.exampleMeaning) {
        html += '<div class="ttc-ex">';
        if (word.example) html += "<b>" + esc(word.example) + "</b>";
        if (word.examplePinyin) html += "<i>" + esc(word.examplePinyin) + "</i>";
        if (word.exampleMeaning) html += "<span>" + esc(word.exampleMeaning) + "</span>";
        html += "</div>";
      }
      html += "</section>";
    });
    var related = [];
    pool.forEach(function (item) {
      var hanzi = item.row.word.h;
      if (hanzi !== top.word.h && hanzi.indexOf(top.word.h) === 0 && related.length < 6) related.push(hanzi);
    });
    if (related.length) {
      html +=
        '<div class="ttc-rel"><span>Từ ghép</span>' +
        related
          .map(function (hanzi) {
            return '<button type="button" data-h="' + esc(hanzi) + '">' + esc(hanzi) + "</button>";
          })
          .join("") +
        "</div>";
    }
    html += "</article>";
    box.innerHTML = html;
    box.hidden = false;
    if (!box.dataset.bound) {
      box.dataset.bound = "1";
      box.addEventListener("click", function (event) {
        var speakBtn = event.target.closest("button[data-say]");
        if (speakBtn) {
          say(speakBtn.getAttribute("data-say") || "");
          return;
        }
        var button = event.target.closest("button[data-h]");
        if (!button) return;
        var input = $("otter2DictSearch");
        if (input) input.value = button.getAttribute("data-h") || "";
        searchWords();
      });
    }
  }

  function paintResultCards(result) {
    var wrap = $("otter2DictResults");
    var title = $("otter2DictResultsTitle");
    var cards = $("otter2DictCards");
    if (!wrap || !cards) return;
    wrap.hidden = false;
    if (title) {
      title.textContent = result.length ? "🔎 " + result.length + " từ khớp (HSK 1–9)" : "Không thấy từ này trong HSK 1–9";
    }
    if (!result.length) {
      cards.innerHTML =
        '<div style="grid-column:1/-1;text-align:center;padding:24px;font-size:16px;color:#777">Không thấy kết quả trong kho HSK 1–9.</div>';
      return;
    }
    cards.innerHTML = result
      .map(function (w, i) {
        return (
          '<article class="otter2-dict-card" data-h="' +
          esc(w.h) +
          '">' +
          '<span class="hsk">HSK ' +
          esc(w.hsk) +
          " · " +
          (i + 1) +
          "</span>" +
          (w.t ? '<span class="type">' + esc(w.t) + "</span>" : "") +
          '<div class="hanzi">' +
          esc(w.h) +
          "</div>" +
          '<div class="pinyin">' +
          esc(w.p || "") +
          "</div>" +
          '<div class="meaning">Nghĩa: ' +
          esc(w.m || "") +
          "</div>" +
          '<button type="button" class="speaker" data-say="' +
          esc(w.h) +
          '" aria-label="Phát âm">🔊</button>' +
          "</article>"
        );
      })
      .join("");
  }

  function showKinds(show) {
    var box = $("otter2DictKinds");
    if (!box) return;
    box.hidden = !show;
  }

  function searchWords() {
    var input = $("otter2DictSearch");
    if (!input) return;
    var keyword = input.value.trim().replace(/\s+/g, " ");
    var clearBtn = $("otter2DictClear");
    if (clearBtn) clearBtn.hidden = !input.value;
    var status = $("otter2DictStatus");
    if (status) {
      status.hidden = true;
      status.textContent = "";
    }

    if (!keyword) {
      hideExtras();
      renderRecent();
      return;
    }

    var kind = searchKind || "vocab";
    if (kind === "grammar") {
      if (status) {
        status.hidden = false;
        status.textContent = "Ngữ pháp chưa chuyển sang index2 trong giai đoạn này.";
      }
      return;
    }

    var pool = lookupWords(keyword);
    pool = filterPoolByKind(pool, keyword, kind);
    var result = pool.slice(0, 24).map(function (item) {
      return item.row.word;
    });
    paintSuggestions(pool.slice(0, 8));
    paintDetail(pool.slice(0, 24));
    paintResultCards(result);
    showKinds(true);

    if (pool[0] && pool[0].rank === 0) rememberLookup(pool[0].row.word);
  }

  function bind() {
    if (bound) return;
    bound = true;
    var search = $("otter2DictSearch");
    if (!search) return;

    var searchTimer = 0;
    search.addEventListener("input", function () {
      var clearBtn = $("otter2DictClear");
      if (clearBtn) clearBtn.hidden = !search.value;
      var status = $("otter2DictStatus");
      if (status) {
        var pending = search.value.trim();
        status.hidden = !pending;
        status.textContent = pending ? "Đang tìm…" : "";
      }
      clearTimeout(searchTimer);
      searchTimer = setTimeout(searchWords, 140);
    });

    search.addEventListener("keydown", function (event) {
      var box = $("otter2DictSuggest");
      var items = box && !box.hidden ? Array.prototype.slice.call(box.querySelectorAll("button[data-h]")) : [];
      var active = -1;
      items.forEach(function (button, index) {
        if (button.classList.contains("ttc-on")) active = index;
      });
      if (event.key === "Escape") {
        if (box) {
          box.hidden = true;
          box.innerHTML = "";
        }
        search.setAttribute("aria-expanded", "false");
        return;
      }
      if ((event.key === "ArrowDown" || event.key === "ArrowUp") && items.length) {
        event.preventDefault();
        var next = event.key === "ArrowDown" ? active + 1 : active - 1;
        if (next < 0) next = items.length - 1;
        if (next >= items.length) next = 0;
        items.forEach(function (button, index) {
          button.classList.toggle("ttc-on", index === next);
        });
        return;
      }
      if (event.key === "Enter") {
        event.preventDefault();
        if (active >= 0) search.value = items[active].getAttribute("data-h") || search.value;
        searchWords();
      }
    });

    search.addEventListener("focus", function () {
      window.__otter2RecentHold = true;
      showKinds(true);
      renderRecent();
    });
    search.addEventListener("blur", function () {
      setTimeout(function () {
        var kinds = $("otter2DictKinds");
        var activeEl = document.activeElement;
        if (kinds && activeEl && kinds.contains(activeEl)) return;
        if (document.activeElement === search) return;
        if (!(search && String(search.value || "").trim())) showKinds(false);
        window.__otter2RecentHold = false;
        renderRecent();
      }, 180);
    });

    var suggest = $("otter2DictSuggest");
    if (suggest) {
      suggest.addEventListener("mousedown", function (event) {
        if (event.target.closest("button")) event.preventDefault();
      });
      suggest.addEventListener("click", function (event) {
        var button = event.target.closest("button[data-h]");
        if (!button) return;
        search.value = button.getAttribute("data-h") || "";
        searchWords();
      });
    }

    var clearBtn = $("otter2DictClear");
    if (clearBtn) {
      clearBtn.addEventListener("click", function () {
        search.value = "";
        clearBtn.hidden = true;
        search.focus();
        searchWords();
      });
    }

    var kindsRow = document.querySelector("#otter2DictKinds .otter2-dict-kinds-row");
    if (kindsRow && kindsRow.dataset.bound !== "1") {
      kindsRow.dataset.bound = "1";
      kindsRow.addEventListener("mousedown", function (ev) {
        ev.preventDefault();
      });
      kindsRow.addEventListener("click", function (ev) {
        var btn = ev.target.closest("button[data-kind]");
        if (!btn) return;
        searchKind = btn.getAttribute("data-kind") || "vocab";
        kindsRow.querySelectorAll("button[data-kind]").forEach(function (el) {
          el.classList.toggle("is-on", el === btn);
        });
        showKinds(true);
        if (searchKind === "grammar") {
          var status = $("otter2DictStatus");
          if (status) {
            status.hidden = false;
            status.textContent = "Ngữ pháp chưa chuyển sang index2.";
          }
          return;
        }
        if (search && String(search.value || "").trim()) searchWords();
        else search.focus();
      });
    }

    var recent = $("otter2DictRecent");
    if (recent) {
      recent.addEventListener("click", function (event) {
        if (event.target.closest("[data-clear-recent]")) {
          try {
            localStorage.removeItem(RECENT_KEY);
          } catch (e) {}
          renderRecent();
          return;
        }
        var button = event.target.closest("button[data-h]");
        if (!button) return;
        search.value = button.getAttribute("data-h") || "";
        searchWords();
      });
    }

    var cards = $("otter2DictCards");
    if (cards) {
      cards.addEventListener("click", function (event) {
        var speakBtn = event.target.closest("[data-say]");
        if (speakBtn) {
          event.stopPropagation();
          say(speakBtn.getAttribute("data-say") || "");
          return;
        }
        var card = event.target.closest("[data-h]");
        if (!card) return;
        search.value = card.getAttribute("data-h") || "";
        searchWords();
      });
    }
  }

  function openDictionaryScreen() {
    if (typeof window.otter2ShowScreen === "function") {
      window.otter2ShowScreen("vocab");
    }
    setTimeout(function () {
      var input = $("otter2DictSearch");
      if (input) input.focus();
    }, 80);
  }

  window.otter2OpenDictionary = openDictionaryScreen;
  window.otter2DictionarySearch = searchWords;

  function boot() {
    bind();
    ensureIndex();
    console.info("Otter2 dictionary ready — HSK 1–9 words:", getWords().length);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
