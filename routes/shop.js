const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../util/paths')
router.get('/',(req,res,next)=>{
    // res.send('<h1>Hii,Express</h1>')
    res.sendFile(path.join(rootDir,'views','shop.html'))
})
module.exports = router;