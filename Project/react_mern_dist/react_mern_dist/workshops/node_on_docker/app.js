const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ result: "ok from docker" });
});

app.listen(91, () => {
  console.log("Server is running..");
});
