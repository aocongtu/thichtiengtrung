export default async function handler(req, res) {

  /* =====================================================
     CORS
  ===================================================== */

  const origin = req.headers.origin || "";

  const allowedOrigins = [
    "https://aocongtu.github.io",
    "https://thichtiengtrung.vercel.app"
  ];

  if (allowedOrigins.includes(origin)) {
    res.setHeader(
      "Access-Control-Allow-Origin",
      origin
    );
  }

  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, OPTIONS"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type"
  );

  res.setHeader(
    "Vary",
    "Origin"
  );


  /* =====================================================
     PREFLIGHT
  ===================================================== */

  if (req.method === "OPTIONS") {
    return res
      .status(204)
      .end();
  }


  /* =====================================================
     CHỈ CHO PHÉP POST
  ===================================================== */

  if (req.method !== "POST") {
    return res.status(405).json({
      ok: false,
      ntfy: false,
      error: "Method not allowed"
    });
  }


  try {

    /* ===================================================
       NHẬN DỮ LIỆU TỪ INDEX.HTML
    =================================================== */

    const {
      message,
      title =
        "🔔 THÍCH TIẾNG TRUNG — YÊU CẦU THANH TOÁN"
    } = req.body || {};


    if (!message) {

      return res.status(400).json({
        ok: false,
        ntfy: false,
        error: "Missing message"
      });

    }


    /* ===================================================
       LẤY THÔNG TIN NTFY TỪ VERCEL
    =================================================== */

    const ntfyTopic =
      process.env.NTFY_TOPIC;

    const ntfyToken =
      process.env.NTFY_TOKEN;


    if (!ntfyTopic) {

      console.error(
        "❌ NTFY_TOPIC is missing"
      );

      return res.status(500).json({
        ok: false,
        ntfy: false,
        error:
          "NTFY_TOPIC chưa được cấu hình trên Vercel"
      });

    }


    /* ===================================================
       HEADER NTFY
    =================================================== */

    const ntfyHeaders = {

  /* HTTP HEADER CHỈ DÙNG KÝ TỰ ASCII */
  "Title":
    "THICH TIENG TRUNG - YEU CAU THANH TOAN",

  "Priority":
    "high",

  "Tags":
    "money_with_wings,thichtiengtrung",

  "Content-Type":
    "text/plain; charset=utf-8"

};

    /* ===================================================
       TOKEN NẾU CÓ
    =================================================== */

    if (ntfyToken) {

      ntfyHeaders["Authorization"] =
        "Bearer " + ntfyToken;

    }


    /* ===================================================
       GỬI THÔNG BÁO QUA NTFY
    =================================================== */

    const ntfyResponse =
      await fetch(
        "https://ntfy.sh/" +
        encodeURIComponent(ntfyTopic),
        {
          method: "POST",

          headers:
            ntfyHeaders,

          body:
            String(message)
        }
      );


    /* ===================================================
       ĐỌC RESPONSE AN TOÀN
    =================================================== */

    const responseText =
      await ntfyResponse.text();


    /* ===================================================
       NTFY TRẢ VỀ LỖI
    =================================================== */

    if (!ntfyResponse.ok) {

      console.error(
        "❌ NTFY ERROR:",
        ntfyResponse.status,
        responseText
      );

      return res.status(500).json({

        ok: false,

        ntfy: false,

        error:
          responseText ||
          "ntfy gửi thông báo thất bại"

      });

    }


    /* ===================================================
       THÀNH CÔNG
    =================================================== */

    console.log(
      "✅ NTFY NOTIFICATION SENT"
    );


    return res.status(200).json({

      ok: true,

      ntfy: true

    });


  } catch (error) {

    /* ===================================================
       LỖI HỆ THỐNG
    =================================================== */

    console.error(
      "❌ NTFY NOTIFICATION ERROR:",
      error
    );


    return res.status(500).json({

      ok: false,

      ntfy: false,

      error:
        error?.message ||
        "Notification failed"

    });

  }

}
