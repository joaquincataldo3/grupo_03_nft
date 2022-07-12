const express = require("express");
const app = express();

const path = require("path");

const publicPath = path.join(__dirname, "./public");

app.use(express.static(publicPath));

app.listen(3000, () => {
  console.log('servidor iniciado en: http://localhost:3000');
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

app.get ("/product-detail", (req, res) => {
     res.sendFile(path.join(__dirname, "/views/product-detail.html"))
})


app.get ("/product-detail", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/product-detail.html"))
})

app.get ("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/login.html"))
})

