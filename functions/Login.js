export async function onRequestPost({ request }) {
  try {
    // Get JSON body from React app
    const reqBody = await request.json();

    // Call your Google Apps Script URL
    const response = await fetch('https://script.google.com/macros/s/AKfycbwlvezg83ZhPPeTzmLfv-eHsc2g-S-ka2yPMs8z_scNn04DHFwQ0O_poivIT2aIenX1/exec', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reqBody),
    });

    const data = await response.json();

    // Return JSON to React app
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ status: 'error', message: err.message }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
