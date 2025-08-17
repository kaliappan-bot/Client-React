import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fetch from "node-fetch";

const app = express();
const PORT = 5000;


const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwlvezg83ZhPPeTzmLfv-eHsc2g-S-ka2yPMs8z_scNn04DHFwQ0O_poivIT2aIenX1/exec";

app.use(cors());
app.use(bodyParser.json());


app.post("/register", async (req, res) => {
  try {
    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "register", ...req.body })
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});


app.post("/login", async (req, res) => {
  try {
    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "login", ...req.body })
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
