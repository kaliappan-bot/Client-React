// List of allowed origins
const ALLOWED_ORIGINS = [
  "http://localhost:5173",                // Local dev
  "https://ibots-kaliappan.pages.dev",   // Production Pages
  "https://f86e173a.client-react-ck5.pages.dev", // Pages preview
];

// Listen to fetch events
addEventListener("fetch", event => {
  event.respondWith(handleRequest(event));
});

/**
 * Cloudflare Worker entrypoint
 */
async function handleRequest(event) {
  try {
    const request = event.request;
    const origin = request.headers.get("Origin") || "*";

    // Determine CORS header
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

    // Only allow POST requests
    if (request.method !== "POST") {
      return new Response(JSON.stringify({ ok: false, error: "POST only" }), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": corsHeader,
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      });
    }

    // Parse request body
    const body = await request.json();

    // Access the secret inside handleRequest
    const CF_API_TOKEN = event.env.CF_API_TOKEN;
    if (!CF_API_TOKEN) {
      throw new Error("CF_API_TOKEN is not defined. Make sure you added the secret via wrangler.");
    }

    // Google Apps Script URL
    const GAS_URL = "https://script.google.com/macros/s/AKfycbzjBIoscs3pBgfJgWhek8gjk_4zInyr9qy4KpIOLlb7uM6JrOHOpEqhIvbRCSMYP12m/exec";

    // Forward request to GAS
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
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  }
}
