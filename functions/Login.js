export async function onRequestPost({ request }) {
  try {
    // Receive request from React app
    const body = await request.json(); // must contain action, empId, password

    // Forward to Apps Script
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwU7ofUgkmQqnK73POjVqjlj6zCMnh8QKQGD7bhHKG2ejRrwIeRdyZ3td2z4CHlNRU/exec", // replace with your script
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );

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
