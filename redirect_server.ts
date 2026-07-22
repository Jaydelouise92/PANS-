import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const REDIRECT_TARGET = "https://jaydelouise92.github.io/PANS-/";

app.all("*", (req, res) => {
  console.log(`Redirecting ${req.method} ${req.url} to ${REDIRECT_TARGET}`);
  res.redirect(301, REDIRECT_TARGET);
});

app.listen(Number(PORT), "0.0.0.0", () => {
  console.log(`Redirect server running on port ${PORT}`);
  console.log(`Target: ${REDIRECT_TARGET}`);
});
