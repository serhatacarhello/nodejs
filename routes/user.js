const express = require("express");
const db = require("../data/db.js");
const router = express.Router();
console.log("🚀 ~ file: user.js:4 ~ router:", router);

router.use("/products/:id", async (req, res) => {
  try {
    const [product] = await db.execute("select * from products where id=?", [
      req.params.id,
    ]);

    res.render("product-details", {
      product: product[0],
    });
  } catch (error) {
    console.log("error", error);
  }
});

router.use("/products", async (req, res) => {
  try {
    const [products] = await db.execute(
      "select * from products where isActive=1"
    );

    res.render("products", {
      products: products,
    });
  } catch (error) {
    console.log("error", error);
  }
});

router.use("/", async (req, res) => {
  try {
    const [products] = await db.execute(
      "select * from products where isHome=1 and isActive=1"
    );

    res.render("index", {
      products: products,
    });
  } catch (error) {
    console.log("error", error);
  }
});

module.exports = router;
