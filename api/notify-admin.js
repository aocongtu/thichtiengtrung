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
       NHẬN DỮ LIỆU
    =================================================== */

    const {
      message,
      title =
        "💰 THÍCH TIẾNG TRUNG — YÊU CẦU THANH TOÁN"
    } = req.body || {};


    if (!message) {

      return res.status(400).json({

        ok: false,

        error: "Missing message"

      });

    }


    /* ===================================================
       KIỂM TRA API KEY
    =================================================== */

    const resendApiKey =
      process.env.RESEND_API_KEY;


    if (!resendApiKey) {

      console.error(
        "❌ RESEND_API_KEY is missing"
      );

      return res.status(500).json({

        ok: false,

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
       ESCAPE HTML
    =================================================== */

    const safeMessage =
      String(message)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");


    /* ===================================================
       NỘI DUNG EMAIL
    =================================================== */

    const emailHtml = `

      <div
        style="
          font-family:Arial,sans-serif;
          max-width:700px;
          margin:auto;
          color:#222;
        "
      >

        <div
          style="
            background:#b91c1c;
            color:white;
            padding:18px;
            border-radius:10px 10px 0 0;
          "
        >

          <h2 style="margin:0;">
            💰 ${title}
          </h2>

        </div>


        <div
          style="
            background:#ffffff;
            padding:20px;
            border:1px solid #ddd;
            border-top:none;
            border-radius:0 0 10px 10px;
          "
        >

          <p
            style="
              margin-top:0;
              font-size:16px;
              font-weight:bold;
            "
          >
            📢 Có yêu cầu thanh toán mới.
          </p>


          <div
            style="
              background:#f5f5f5;
              padding:15px;
              border-radius:8px;
              white-space:pre-wrap;
              line-height:1.6;
              font-size:15px;
            "
          >
            ${safeMessage}
          </div>


          <p
            style="
              margin-bottom:0;
              margin-top:20px;
              color:#666;
              font-size:13px;
            "
          >
            Đây là thông báo tự động từ hệ thống
            Thích Tiếng Trung.
          </p>

        </div>

      </div>

    `;


    /* ===================================================
       GỌI RESEND
    =================================================== */

    const resendResponse =
      await fetch(
        "https://api.resend.com/emails",
        {

          method: "POST",

          headers: {

            "Authorization":
              "Bearer " +
              resendApiKey,

            "Content-Type":
              "application/json"

          },

          body:
            JSON.stringify({

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
       RESEND BÁO LỖI
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
      "✅ RESEND EMAIL SENT:",
      resendData
    );


    return res.status(200).json({

      ok: true,

      email: true,

      id:
        resendData?.id || null

    });


  } catch (error) {

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
