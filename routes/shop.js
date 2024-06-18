const express = require("express");
const path = require("path");
const router = express.Router();
const rootDir = require("../util/paths");
const adminData = require("./admin");
const shopController = require("../controllers/shop");

router.get("/", shopController.getIndex);

router.get("/products",shopController.getProducts);

router.get('/products/:productId',shopController.getProduct);

router.get('/cart',shopController.getCart);

router.get('/checkout',shopController.getCheckout);

router.get('/orders',shopController.getOrders);

router.post('/cart',shopController.postCart);

// res.send('<h1>Hii,Express</h1>')
// console.log("shop-data",adminData.products)
// res.sendFile(path.join(rootDir,'views','shop.html'))

module.exports = router;
