export async function onRequestPost({ request }) {
  try {
    // Receive request from React app
    const body = await request.json();

    // Forward request to Google Apps Script
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwzN9d_YBYxzaaQt_LMKlsq8AkuDoLTXqD0d6FUKgEaApokB7Er_VcE3YzvovDu1ozg/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );

    // Parse Apps Script response safely
    const text = await response.text();
    const data = text ? JSON.parse(text) : { status: "error", message: "Empty response from server" };

    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ status: "error", message: err.toString() }),
      { headers: { "Content-Type": "application/json" } }
    );
  }
}
