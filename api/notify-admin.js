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
        "💰 THÍCH TIẾNG TRUNG — YÊU CẦU THANH TOÁN"
    } = req.body || {};


    if (!message) {

      return res.status(400).json({
        ok: false,
        email: false,
        error: "Missing message"
      });

    }


    /* ===================================================
       LẤY RESEND API KEY
    =================================================== */

    const resendApiKey =
      process.env.RESEND_API_KEY;


    if (!resendApiKey) {

      console.error(
        "❌ RESEND_API_KEY is missing"
      );

      return res.status(500).json({
        ok: false,
        email: false,
        error:
          "RESEND_API_KEY chưa được cấu hình trên Vercel"
      });

    }


    /* ===================================================
       EMAIL ADMIN
    =================================================== */

    const adminEmail =
      "phaithatthanhcong34@gmail.com";


    /* ===================================================
       BẢO VỆ NỘI DUNG HTML
    =================================================== */

    const safeTitle =
      String(title)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");


    const safeMessage =
      String(message)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");


    /* ===================================================
       HTML EMAIL
    =================================================== */

    const emailHtml = `

      <!DOCTYPE html>

      <html lang="vi">

      <head>

        <meta charset="UTF-8">

        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0"
        >

        <title>${safeTitle}</title>

      </head>


      <body
        style="
          margin:0;
          padding:20px;
          background:#f3f4f6;
          font-family:Arial,Helvetica,sans-serif;
        "
      >

        <div
          style="
            max-width:700px;
            margin:0 auto;
          "
        >

          <!-- HEADER -->

          <div
            style="
              background:#b91c1c;
              color:#ffffff;
              padding:20px;
              border-radius:12px 12px 0 0;
            "
          >

            <h2
              style="
                margin:0;
                font-size:20px;
              "
            >
              💰 ${safeTitle}
            </h2>

          </div>


          <!-- CONTENT -->

          <div
            style="
              background:#ffffff;
              padding:22px;
              border:1px solid #dddddd;
              border-top:none;
              border-radius:0 0 12px 12px;
            "
          >

            <p
              style="
                margin:0 0 16px 0;
                font-size:16px;
                font-weight:bold;
              "
            >
              📢 Có yêu cầu thanh toán mới.
            </p>


            <div
              style="
                background:#f5f5f5;
                padding:16px;
                border-radius:8px;
                white-space:pre-wrap;
                line-height:1.7;
                font-size:15px;
              "
            >
              ${safeMessage}
            </div>


            <p
              style="
                margin:20px 0 0 0;
                color:#777777;
                font-size:13px;
              "
            >
              Đây là thông báo tự động từ hệ thống
              <strong>THÍCH TIẾNG TRUNG</strong>.
            </p>

          </div>

        </div>

      </body>

      </html>

    `;


    /* ===================================================
       GỬI EMAIL QUA RESEND
    =================================================== */

    const resendResponse =
      await fetch(
        "https://api.resend.com/emails",
        {
          method: "POST",

          headers: {
            "Authorization":
              "Bearer " + resendApiKey,

            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({

            from:
              "Thích Tiếng Trung <onboarding@resend.dev>",

            to:
              [adminEmail],

            subject:
              title,

            html:
              emailHtml

          })
        }
      );


    /* ===================================================
       ĐỌC RESPONSE AN TOÀN
    =================================================== */

    const responseText =
      await resendResponse.text();

    let resendData = null;


    try {

      resendData =
        JSON.parse(responseText);

    } catch {

      resendData = {
        raw: responseText
      };

    }


    /* ===================================================
       RESEND TRẢ VỀ LỖI
    =================================================== */

    if (!resendResponse.ok) {

      console.error(
        "❌ RESEND ERROR:",
        resendData
      );

      return res.status(500).json({

        ok: false,

        email: false,

        error:
          resendData?.message ||
          resendData?.error ||
          resendData?.raw ||
          "Resend gửi email thất bại"

      });

    }


    /* ===================================================
       THÀNH CÔNG
    =================================================== */

    console.log(
      "✅ ADMIN EMAIL SENT:",
      resendData
    );


    return res.status(200).json({

      ok: true,

      email: true,

      id:
        resendData?.id || null

    });


  } catch (error) {

    /* ===================================================
       LỖI HỆ THỐNG
    =================================================== */

    console.error(
      "❌ NOTIFICATION ERROR:",
      error
    );


    return res.status(500).json({

      ok: false,

      email: false,

      error:
        error?.message ||
        "Notification failed"

    });

  }

}
