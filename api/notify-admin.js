export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      ok: false,
      error: "Method not allowed"
    });
  }

  try {

    const {
      message,
      title = "THÍCH TIẾNG TRUNG"
    } = req.body || {};

    if (!message) {
      return res.status(400).json({
        ok: false,
        error: "Missing message"
      });
    }

    const ntfyTopic =
      process.env.NTFY_TOPIC;

    const ntfyToken =
      process.env.NTFY_TOKEN;

    const gmailWebhook =
      process.env.GMAIL_WEBHOOK_URL;

    let ntfyOk = false;
    let gmailOk = false;

    /* =====================================================
       📱 NTFY — THÔNG BÁO CHÍNH
       ===================================================== */

    if (ntfyTopic) {

      const headers = {
        "Title": title,
        "Priority": "high",
        "Tags": "money_with_wings,thichtiengtrung"
      };

      if (ntfyToken) {
        headers["Authorization"] =
          "Bearer " + ntfyToken;
      }

      const ntfyResponse =
        await fetch(
          "https://ntfy.sh/" +
          encodeURIComponent(ntfyTopic),
          {
            method: "POST",
            headers,
            body: message
          }
        );

      ntfyOk =
        ntfyResponse.ok;

      if (!ntfyOk) {
        console.error(
          "NTFY ERROR:",
          await ntfyResponse.text()
        );
      }

    }

    /* =====================================================
       📧 GMAIL — DỰ PHÒNG
       ===================================================== */

    if (gmailWebhook) {

      const gmailResponse =
        await fetch(
          gmailWebhook,
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json"
            },
            body: JSON.stringify({
              subject: title,
              message: message
            })
          }
        );

      gmailOk =
        gmailResponse.ok;

      if (!gmailOk) {
        console.error(
          "GMAIL WEBHOOK ERROR:",
          await gmailResponse.text()
        );
      }

    }

    return res.status(200).json({
      ok: true,
      ntfy: ntfyOk,
      gmail: gmailOk
    });

  } catch (error) {

    console.error(
      "NOTIFICATION ERROR:",
      error
    );

    return res.status(500).json({
      ok: false,
      error: error.message
    });

  }

}
