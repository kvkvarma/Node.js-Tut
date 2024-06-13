const express = require('express');
const app = express();
const path = require('path');
const adminData= require("./routes/admin");
const shopRoutes = require('./routes/shop');
const bodyParser = require('body-parser');
const routes = require('./routes/route');
const rootDir = require('./util/paths')

app.set("view engine","ejs");
app.set('views','views');//By default it direct to views i.e the view 
//engine so if we use the floder with different name we need to configure...

app.use(express.static(path.join(__dirname,'public')))  
app.use(bodyParser.urlencoded({extended:false}));

// app.use('/admin',adminRoutes);//In this way we can add default path names to all the requests...
app.use(adminData.routes);
app.use(shopRoutes);
app.use((req,res,next)=>{
    // res.status(404).send('<h1>Page Not Found</h1>')
    // res.status(404).sendFile(path.join(rootDir,'views','pageNotFound.html')); //we can create the path dirname will ponit to the directories.....
    res.status(404).render('404',{pageTitle:"Page Not Found",path:''})
})

// app.use((req,res,next)=>{
    //     console.log('In the Middleware');
    //     next(); //use next() to end the request and to the next req
    // })
    
    //Ass the miidlewares execute from top to bottom way as we dont give the next() to the
    // "/home" req it wont go the next middleware that's why we declared it on the top of "/"
    
    // app.use('/',(req,res,next)=>{
        //     console.log('This Always Runs!!')
        //     next();
        // })


// console.log(routes.someText)
// const server = http.createServer(routes.reqHandling);


// const server = http.createServer(app);
// server.listen(8035);
    app.listen(8035);