const express = require('express');
const path = require('path');
const { DEFAULT_MAX_VERSION } = require('tls');
const router = express.Router();
const rootDir = require('../util/paths');
const { route } = require('./shop');
//Both can have the same urlpath if they differ in the method

const products = [];
//      /admin/add-user
router.get('/add-product',(req,res,next)=>{
    // res.send('<form action="/admin/users" method="POST"><input type="text" name="title"><button type="submit">submit</button></form>')
    res.sendFile(path.join(__dirname,'../','views','add-product.html'));
})
//     /admin.users
router.post('/add-product',(req,res,next)=>{
    console.log("admin-page",req.body);
    products.push({title:req.body.title})
    res.redirect('/');
    // console.log('Users Middleware');
    // res.send('<h4>This is users path</h4>');
})  
exports.routes = router;
exports.products = products;
