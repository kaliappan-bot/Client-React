// === ALLOWED ORIGINS ===
const ALLOWED_ORIGINS = [
  "http://localhost:5173",                 // Local dev
  "https://ibots-kaliappan.pages.dev",    // Production
];

// === HELPER FUNCTIONS ===
function jsonResponse(obj, status = 200, corsOrigin = "*") {
  return new Response(JSON.stringify(obj), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": corsOrigin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}

// === WORKER ENTRYPOINT ===
addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event));
});

async function handleRequest(event) {
  const request = event.request;
  const origin = request.headers.get("Origin") || "*";
  const corsOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : "*";

  // Handle preflight OPTIONS request
  if (request.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": corsOrigin,
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  }

  if (request.method !== "POST") {
    return jsonResponse({ ok: false, error: "POST only" }, 405, corsOrigin);
  }

  try {
    const body = await request.json();
    const { action, payload } = body;

    // Forward request to Google Apps Script
    const GAS_URL = "https://script.google.com/macros/s/AKfycbzjBIoscs3pBgfJgWhek8gjk_4zInyr9qy4KpIOLlb7uM6JrOHOpEqhIvbRCSMYP12m/exec"; // replace with your GAS URL
    const CF_API_TOKEN = event.env.CF_API_TOKEN;

    const res = await fetch(GAS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${CF_API_TOKEN}`,
      },
      body: JSON.stringify({ action, payload }),
    });

    const data = await res.json();
    return jsonResponse(data, 200, corsOrigin);
  } catch (err) {
    return jsonResponse({ ok: false, error: err.message }, 500, corsOrigin);
  }
}
