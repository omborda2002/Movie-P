const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require('body-parser');
const data = require("./data.json");
const fs = require('fs');

// TODO: JSON DATA 
// fs.readFile("./data.json", "utf8", (err, jsonString) => {
//   if (err) {
//     console.log("Error reading file from disk:", err);
//     return;
//   }
//   try {
//     const data = JSON.parse(jsonString);
//     console.log(data); // => "Customer address is: Infinity Loop Drive"
//   } catch (err) {
//     console.log("Error parsing JSON string:", err);
//   }
// });



app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home",{data});
});

app.get("/inner", (req, res) => {
  res.render("inner",{data});
});

app.get("/search", (req, res) => {
  console.log(req.query);
  res.send("Ok Search !");
});

app.listen(3000, () => {
  console.log("Example app listening at http://localhost:3000");
});

