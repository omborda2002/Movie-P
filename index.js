const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const data = require("./data.json");
let datam;
let dataSearch;
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
      }else if (data[i].genre == "action") {
        arr.push(data[i]);
      }
    }
  }

  if (sub == "adventure") {
    arr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].genre == "Adventure") {
        arr.push(data[i]);
      }else if (data[i].genre == "adventure") {
        arr.push(data[i]);
      }
    }
  }

  if (sub == "animated") {
    arr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].genre == "Animated") {
        arr.push(data[i]);
      }else if (data[i].genre == "animated") {
        arr.push(data[i]);
      }
    }
  }

  if (sub == "comedy") {
    arr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].genre == "Comedy") {
        arr.push(data[i]);
      }else if (data[i].genre == "comedy") {
        arr.push(data[i]);
      }
    }
  }

  if (sub == "crime") {
    arr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].genre == "Crime") {
        arr.push(data[i]);
      }else if (data[i].genre == "crime") {
        arr.push(data[i]);
      }
    }
  }

  if (sub == "fantasy") {
    arr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].genre == "Fantasy") {
        arr.push(data[i]);
      }else if (data[i].genre == "fantasy") {
        arr.push(data[i]);
      }
    }
  }

  if (sub == "horror") {
    arr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].genre == "Horror") {
        arr.push(data[i]);
      }else if (data[i].genre == "horror") {
        arr.push(data[i]);
      }
    }
  }
  if (sub == "mystery") {
    arr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].genre == "Mystery") {
        arr.push(data[i]);
      }else if (data[i].genre == "mystery") {
        arr.push(data[i]);
      }
    }
  }
  if (sub == "scifi") {
    arr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].genre == "Sci-Fi") {
        arr.push(data[i]);
      }else if (data[i].genre == "sci-fi") {
        arr.push(data[i]);
      }else if (data[i].genre == "Sci-fi") {
        arr.push(data[i]);
      }else if (data[i].genre == "sci-Fi") {
        arr.push(data[i]);
      }
    }
  }
  if (sub == "Romance") {
    arr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].genre == "Romance") {
        arr.push(data[i]);
      }else if (data[i].genre == "romance") {
        arr.push(data[i]);
      }
    }
  }
  if (sub == "drama") {
    arr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].genre == "Drama") {
        arr.push(data[i]);
      }else if (data[i].genre == "drama") {
        arr.push(data[i]);
      }
    }
  }
  if (sub == "thriller") {
    arr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].genre == "Thriller") {
        arr.push(data[i]);
      }else if (data[i].genre == "thriller") {
        arr.push(data[i]);
      }
    }
  }

  if (sub == "EnglishMovies") {
    arr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].language == "English") {
        arr.push(data[i]);
      }else if (data[i].language == "english") {
        arr.push(data[i]);
      }
    }
  }

  if (sub == "HollywoodMovies") {
    arr = [];

    for (let i = 0; i < data.length; i++) {
      if (data[i].language == "hollywood") {
        arr.push(data[i]);
      }else if (data[i].language == "Hollywood") {
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
  res.render("s", { arr });
});

app.get("/page/:num", (req, res) => {
  const { num } = req.params;
  console.log(num);
  res.render("home", { num, data });
});

// SEARCH :
app.get("/search", (req, res) => {
  console.log(req.query);
  const { q } = req.query;
  console.log(q);
  //search value :
  for (let i = 0; i < data.length; i++) {
    if (data[i].name == q) {
      dataSearch = data[i];
    }
  }
  res.render("s", { dataSearch });
});

app.listen(3000, () => {
  console.log("Example app listening at http://localhost:3000");
});
