const express = require('express');
const router = express.Router();
router.get('/',(req,res,next)=>{
    // console.log('Hello There!!!')
    res.send('<h1>Hii,Express</h1>')
})
module.exports = router;