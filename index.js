const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("node_modules"));

const data = [
  {
    id: 1,
    name: "iphone 14",
    price: 7000,
    isActive: true,
    imageUrl: "1.jpeg",
    isHome: true,
  },
  {
    id: 2,
    name: "iphone 15",
    price: 8000,
    isActive: true,
    imageUrl: "2.jpeg",
    isHome: false,
  },
  {
    id: 3,
    name: "iphone 16",
    price: 9000,
    isActive: false,
    imageUrl: "3.jpeg",
    isHome: true,
  },
];

// routes

app.use("/products/:id", function (req, res) {
  const product = data.find((i) => i.id == req.params.id);
  res.render("product-details", { product });
});

app.use("/products", function (req, res) {
  res.render("products", { products: data });
});

app.use("/", function (req, res) {
  res.render("index", { products: data });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
