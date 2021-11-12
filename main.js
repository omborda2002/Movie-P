const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));
app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/inner", (req, res) => {
  res.render("inner");
});

app.listen(3000, () => {
  console.log("Example app listening at http://localhost:3000");
});

