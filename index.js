const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const data = require("./data.json");
let datam;
let arr = [];
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

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  let num = 0;
  res.render("home", { data, num });
});

app.get("/inner/:name", (req, res) => {
  const { name } = req.params;

  for (let i = 0; i < data.length; i++) {
    if (data[i].name == name) {
      datam = data[i];
      break;
    }
  }

  res.render("inner", { datam, data });
  // res.render("inner",{datam:data[name.valueOf()]});
});

//TODO: CATEGORY:
// app.get("/category/LatestReleased", (req, res) => {
//   let arr = [];
//   const d = new Date();
//   let year = d.getFullYear();
//   console.log(year);
//   for (let i = 0; i < data.length; i++) {
//     if (data[i].year == year) {
//       arr.push(data[i]);
//     }
//   }
//   res.render('s',{arr});
// });

// app.get("/category/HollywoodMovies", (req, res) => {
//   let arr = [];

//   for (let i = 0; i < data.length; i++) {
//     if (data[i].language == 'hollywood') {
//       arr.push(data[i]);
//     }
//   }
//   console.log(arr);
//   res.render('s',{arr});
// });

// app.get("/category/EnglishMovies", (req, res) => {
//   let arr = [];

//   for (let i = 0; i < data.length; i++) {
//     if (data[i].language == 'English') {
//       arr.push(data[i]);
//     }
//   }
//   console.log(arr);
//   res.render('s',{arr});
// });

app.get("/category/:sub", (req, res) => {
  let { sub } = req.params;
  arr = [];

  if (sub == "action") {
    arr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].genre == "Action") {
        arr.push(data[i]);
      } else if (data[i].genre == "action") {
        arr.push(data[i]);
      }
    }
  }

  if (sub == "adventure") {
    arr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].genre == "Adventure") {
        arr.push(data[i]);
      } else if (data[i].genre == "adventure") {
        arr.push(data[i]);
      }
    }
  }

  if (sub == "animated") {
    arr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].genre == "Animated") {
        arr.push(data[i]);
      } else if (data[i].genre == "animated") {
        arr.push(data[i]);
      }
    }
  }

  if (sub == "comedy") {
    arr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].genre == "Comedy") {
        arr.push(data[i]);
      } else if (data[i].genre == "comedy") {
        arr.push(data[i]);
      }
    }
  }

  if (sub == "crime") {
    arr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].genre == "Crime") {
        arr.push(data[i]);
      } else if (data[i].genre == "crime") {
        arr.push(data[i]);
      }
    }
  }

  if (sub == "fantasy") {
    arr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].genre == "Fantasy") {
        arr.push(data[i]);
      } else if (data[i].genre == "fantasy") {
        arr.push(data[i]);
      }
    }
  }

  if (sub == "horror") {
    arr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].genre == "Horror") {
        arr.push(data[i]);
      } else if (data[i].genre == "horror") {
        arr.push(data[i]);
      }
    }
  }
  if (sub == "mystery") {
    arr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].genre == "Mystery") {
        arr.push(data[i]);
      } else if (data[i].genre == "mystery") {
        arr.push(data[i]);
      }
    }
  }
  if (sub == "scifi") {
    arr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].genre == "Sci-Fi") {
        arr.push(data[i]);
      } else if (data[i].genre == "sci-fi") {
        arr.push(data[i]);
      } else if (data[i].genre == "Sci-fi") {
        arr.push(data[i]);
      } else if (data[i].genre == "sci-Fi") {
        arr.push(data[i]);
      }
    }
  }
  if (sub == "Romance") {
    arr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].genre == "Romance") {
        arr.push(data[i]);
      } else if (data[i].genre == "romance") {
        arr.push(data[i]);
      }
    }

    console.log(arr);
  }
  if (sub == "drama") {
    arr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].genre == "Drama") {
        arr.push(data[i]);
      } else if (data[i].genre == "drama") {
        arr.push(data[i]);
      }
    }
  }
  if (sub == "thriller") {
    arr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].genre == "Thriller") {
        arr.push(data[i]);
      } else if (data[i].genre == "thriller") {
        arr.push(data[i]);
      }
    }
  }

  if (sub == "DualAudio") {
    arr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].language == "Dual Audio") {
        arr.push(data[i]);
      } else if (data[i].language == "Dualaudio") {
        arr.push(data[i]);
      } else if (data[i].language == "dualaudio") {
        arr.push(data[i]);
      } else if (data[i].language == "Dualaudio") {
        arr.push(data[i]);
      } else if (data[i].language == "Dual audio") {
        arr.push(data[i]);
      }else if (data[i].language == "dual audio") {
        arr.push(data[i]);
      }
    }
  }

  if (sub == "HollywoodMovies") {
    arr = [];

    for (let i = 0; i < data.length; i++) {
      if (data[i].type == "hollywood") {
        arr.push(data[i]);
      } else if (data[i].type == "Hollywood") {
        arr.push(data[i]);
      }
    }
  }
  if (sub == "Bollywood") {
    arr = [];

    for (let i = 0; i < data.length; i++) {
      if (data[i].type == "bollywood") {
        arr.push(data[i]);
      } else if (data[i].type == "Bollywood") {
        arr.push(data[i]);
      }
    }
  }

  if (sub == "LatestReleased") {
    arr = [];
    const d = new Date();
    let year = d.getFullYear();

    for (let i = 0; i < data.length; i++) {
      if (data[i].year == year) {
        arr.push(data[i]);
      }
    }
  }

  if (sub == "2021MOVIES") {
    arr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].year == 2021) {
        arr.push(data[i]);
      }
    }
  }

  if (sub == "2020MOVIES") {
    arr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].year == 2020) {
        arr.push(data[i]);
      }
    }
  }
  if (sub == "2019MOVIES") {
    arr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].year == 2019) {
        arr.push(data[i]);
      }
    }
  }
  if (sub == "2018") {
    arr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].year == 2018) {
        arr.push(data[i]);
      }
    }
  }
  if (sub == "2017") {
    arr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].year == 2017) {
        arr.push(data[i]);
      }
    }
  }
  if (sub == "2016") {
    arr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].year == 2016) {
        arr.push(data[i]);
      }
    }
  }
  if (sub == "2015") {
    arr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].year == 2015) {
        arr.push(data[i]);
      }
    }
  }
  if (sub == "2014") {
    arr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].year == 2014) {
        arr.push(data[i]);
      }
    }
  }
  if (sub == "2013") {
    arr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].year == 2013) {
        arr.push(data[i]);
      }
    }
  }
  if (sub == "2012") {
    arr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].year == 2012) {
        arr.push(data[i]);
      }
    }
  }
  if (sub == "2011") {
    arr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].year == 2011) {
        arr.push(data[i]);
      }
    }
  }
  if (sub =="2006-2010") {
    arr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].year == 2006) {
        arr.push(data[i]);
      }else if (data[i].year == 2007){
        arr.push(data[i])
      }else if (data[i].year == 2008){
        arr.push(data[i])
      }else if (data[i].year == 2009){
        arr.push(data[i])
      }else if (data[i].year == 2010){
        arr.push(data[i])
      }
    }
  }
  if (sub =="2001-2005") {
    arr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].year == 2001) {
        arr.push(data[i]);
      }else if (data[i].year == 2002){
        arr.push(data[i])
      }else if (data[i].year == 2003){
        arr.push(data[i])
      }else if (data[i].year == 2004){
        arr.push(data[i])
      }else if (data[i].year == 2005){
        arr.push(data[i])
      }
    }
  }
  if (sub =="1991-2000") {
    arr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].year == 1991) {
        arr.push(data[i]);
      }else if (data[i].year == 1992){
        arr.push(data[i])
      }else if (data[i].year == 1993){
        arr.push(data[i])
      }else if (data[i].year == 1994){
        arr.push(data[i])
      }else if (data[i].year == 1995){
        arr.push(data[i])
      }else if (data[i].year == 1996){
        arr.push(data[i])
      }else if (data[i].year == 1997){
        arr.push(data[i])
      }else if (data[i].year == 1998){
        arr.push(data[i])
      }else if (data[i].year == 1999){
        arr.push(data[i])
      }else if (data[i].year == 2000){
        arr.push(data[i])
      }
    }
  }
  if (sub =="1980-1990") {
    arr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].year == 1980) {
        arr.push(data[i]);
      }else if (data[i].year == 1981){
        arr.push(data[i])
      }else if (data[i].year == 1982){
        arr.push(data[i])
      }else if (data[i].year == 1983){
        arr.push(data[i])
      }else if (data[i].year == 1984){
        arr.push(data[i])
      }else if (data[i].year == 1985){
        arr.push(data[i])
      }else if (data[i].year == 1986){
        arr.push(data[i])
      }else if (data[i].year == 1987){
        arr.push(data[i])
      }else if (data[i].year == 1988){
        arr.push(data[i])
      }else if (data[i].year == 1989){
        arr.push(data[i])
      }else if (data[i].year == 1990){
        arr.push(data[i])
      }
    }
  }
  

  res.render("s", { arr });
});

app.get("/page/:num", (req, res) => {
  const { num } = req.params;
  res.render("home", { num, data });
});

// SEARCH :
app.get("/search", (req, res) => {
  console.log(req.query);
  const { q } = req.query;

  let str = q.toLowerCase();
  // console.log(data[0].name);
  arr = [];
  for (let i = 0; i < data.length; i++) {
    let main = data[i].name.toLowerCase();
    let lm = main.length;
    let ls = str.length;
    let c = 0;

    for (let j = 0; j < lm; j++) {
      let temp = main.substring(j, ls + j);
      // console.log(`${temp} , ${str}`);

      if (temp == str) {
        c++;

        // console.log(`count ${c}`);
      }
    }
    if (c >= 1) {
      arr.push(data[i]);
      // console.log(`log  ${data[i]}`);
    }
  }
  res.render("s", { arr });
});

app.listen(3000, () => {
  console.log("Example app listening at http://localhost:3000");
});
