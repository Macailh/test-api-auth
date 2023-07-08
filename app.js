const express = require("express");
const { checkApiKey } = require("./middlewares/auth.handler");

const app = express();

app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

app.get("/uno", checkApiKey, (req, res) => {
  res.send("Uno");
});

app.get("/dos", (req, res) => {
  res.send("Dos");
});

app.get("/tres", (req, res) => {
  res.send("Tres");
});

app.listen(3000, () => {
  console.log("La API está escuchando en el puerto 3000");
});
