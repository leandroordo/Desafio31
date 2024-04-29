const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Servir los archivos index.html, about y contact.html
app.use(express.static("resources", { extensions: ["png", "css"] }));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});
app.get("/index", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname, "/about.html"));
});

app.get("/contact", function (req, res) {
  res.sendFile(path.join(__dirname, "/contact.html"));
});

app.get("/error", function (req, res) {
  throw new Error("Algo salió mal");
});

//Error 404
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/404.html"));
});

//Error 500
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).sendFile(path.join(__dirname, "/500.html"));
});

app.listen(port);
console.log("Servidor web corriendo en http://localhost:" + port);
