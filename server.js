const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

let distance = null;

app.use(express.json());

app.post("/distance", (req, res) => {
  distance = req.body.distance;
  res.send({ status: "ok" });
});

app.get("/distance", (req, res) => {
  res.send({ distance });
});

app.get("/", (req, res) => {
  res.send("API läuft 🚀");
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
