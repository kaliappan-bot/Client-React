export async function onRequestPost({ request }) {
  try {
    // 1️⃣ Receive request from React app
    const body = await request.json();

    // 2️⃣ Forward request to Google Apps Script
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbyuQpXj1jAcz48qyPBPXUyvJ60uKmO1l7rsfz7EfWczKdgylCQ9kP6dTwfVaH7uep6_/exec", // Replace with your Apps Script URL
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );

    // 3️⃣ Safely parse Apps Script response
    const text = await response.text();
    const data = text ? JSON.parse(text) : { status: "error", message: "Empty response from server" };

    // 4️⃣ Return JSON to React app
    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ status: "error", message: err.toString() }), {
      headers: { "Content-Type": "application/json" },
    });
  }
}
