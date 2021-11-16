const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require('body-parser');
const data = require("./data.json");
let datam;
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
  let num=0;
  res.render("home",{data,num});
});

app.get("/inner/:name", (req, res) => {
  const {name}=req.params;

  for(let i=0;i<data.length;i++){

    if(data[i].name==name){
      datam=data[i];
      break;
    }

  }

  res.render("inner",{datam});
  // res.render("inner",{datam:data[name.valueOf()]});
});

app.get("/page/:num",(req,res)=>{
  const {num}=req.params;
  console.log(num);
  res.render("home",{num,data});

});
app.get("/search", (req, res) => {
  console.log(req.query);
  res.send("Ok Search !");
});

app.listen(3000, () => {
  console.log("Example app listening at http://localhost:3000");
});

