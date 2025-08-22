const GAS_URL = import.meta.env.VITE_GAS_URL;

async function postAction(action, payload) {
  try {
    const res = await fetch(GAS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action, payload }),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return { ok: false, error: err.message };
  }
}

export const api = {
  register: (form) => postAction("register", form),
  employeeLogin: (form) => postAction("employeeLogin", form),
  adminLogin: (form) => postAction("adminLogin", form),
};
