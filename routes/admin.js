const express = require('express');
const router = express.Router();
router.get('/add-user',(req,res,next)=>{
    res.send('<form action="/users" method="POST"><input type="text" name="title"><button type="submit">submit</button></form>')
})

router.post('/users',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
    // console.log('Users Middleware');
    // res.send('<h4>This is users path</h4>');
})
module.exports = router;