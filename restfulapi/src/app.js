const express =require("express");
const Retailer = require("./models/retailer");
require("./db/conn");
const loginRouter= require("./router/login");
const Student=require("./models/students");


const app= express();
// to convert json file comming from postman into readable file
const port = process.env.PORT || 8000;





app.use(express.json());
// all the function we can keep outside from thie file
// we have created a router so that our get,push,patch 
app.use(loginRouter);
// app.get('/' , (req , res)=>{
//    res.send('hello from other side :)')
// })

app.listen(port,() =>{
    console.log(`connection established at ${port}`);
})