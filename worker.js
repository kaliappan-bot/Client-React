// List of allowed origins
const ALLOWED_ORIGINS = [
  "http://localhost:5173",                 // Local dev
  "https://ibots-kaliappan.pages.dev",    // Production Pages
  "https://f86e173a.client-react-ck5.pages.dev", // Preview
];

// Listen to fetch events
addEventListener("fetch", event => {
  event.respondWith(handleRequest(event));
});

async function handleRequest(event) {
  const CF_API_TOKEN = event.env.CF_API_TOKEN;
  try {
    const request = event.request;
    const origin = request.headers.get("Origin") || "*";
    const corsHeader = ALLOWED_ORIGINS.includes(origin) ? origin : "*";

    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": corsHeader,
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      });
    }

    if (request.method !== "POST") {
      return new Response(JSON.stringify({ ok: false, error: "POST only" }), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": corsHeader,
        },
      });
    }

    // Parse request body
    const body = await request.json();
    const { action, empid, password } = body;

    // Google Apps Script endpoint
    const GAS_URL = "https://script.google.com/macros/s/AKfycbzjBIoscs3pBgfJgWhek8gjk_4zInyr9qy4KpIOLlb7uM6JrOHOpEqhIvbRCSMYP12m/exec";

    // Forward the request
    const res = await fetch(GAS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${CF_API_TOKEN}`,
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": corsHeader,
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });

  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: err.message }), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
}
