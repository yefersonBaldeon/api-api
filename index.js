const express = require("express");

const app = express();

app.get("/api/v1/products", async (req, res) => {
  const a = await fetch("https://jsonplaceholder.typicode.com/posts");
  const b = await a.json();
  res.json(b);
});

app.get("/api/v1/", async (req, res) => {
  res.send("hola mundo");
});

app.listen(3000, () => {
  console.log("Servidor Express escuchando en el puerto 3000");
});




