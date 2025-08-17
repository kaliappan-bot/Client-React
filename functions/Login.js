export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwlvezg83ZhPPeTzmLfv-eHsc2g-S-ka2yPMs8z_scNn04DHFwQ0O_poivIT2aIenX1/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      }
    );

    if (!response.ok) {
      return res.status(response.status).json({
        status: "error",
        message: "Apps Script did not respond correctly",
      });
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("Proxy error:", err);
    res.status(500).json({ status: "error", message: "Server error" });
  }
}
