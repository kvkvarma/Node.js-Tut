const express = require("express");
const path = require("path");
const router = express.Router();
const rootDir = require("../util/paths");
const adminData = require("./admin");
const productsController = require("../controllers/products");

router.get("/", productsController.getProducts);
// res.send('<h1>Hii,Express</h1>')
// console.log("shop-data",adminData.products)
// res.sendFile(path.join(rootDir,'views','shop.html'))

module.exports = router;
