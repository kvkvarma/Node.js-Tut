const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../util/paths')
const adminData = require('./admin');
router.get('/',(req,res,next)=>{
    // res.send('<h1>Hii,Express</h1>')
    // console.log("shop-data",adminData.products)
    // res.sendFile(path.join(rootDir,'views','shop.html'))
    res.render('shop')
})
module.exports = router;