const express = require('express');
const path = require('path');
const { DEFAULT_MAX_VERSION } = require('tls');
const router = express.Router();
const rootDir = require('../util/paths');
//Both can have the same urlpath if they differ in the method

//      /admin/add-user
router.get('/add-product',(req,res,next)=>{
    // res.send('<form action="/admin/users" method="POST"><input type="text" name="title"><button type="submit">submit</button></form>')
    res.sendFile(path.join(__dirname,'../','views','add-product.html'));
})
//     /admin.users
router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
    // console.log('Users Middleware');
    // res.send('<h4>This is users path</h4>');
})
module.exports = router;