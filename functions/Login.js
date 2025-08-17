export async function onRequestPost({ request }) {
  try {
    const body = await request.json();

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwzN9d_YBYxzaaQt_LMKlsq8AkuDoLTXqD0d6FUKgEaApokB7Er_VcE3YzvovDu1ozg/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );

    const data = await response.json();

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
