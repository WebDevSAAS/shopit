const mongoose = require('mongoose');
const express = require('express');
const app= express();
// connection of database with atlas
const DB ='mongodb+srv://abhi:abhi123@@cluster0.gqfkx.mongodb.net/mernstack?retryWrites=true&w=majority'

mongoose.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log(`connection of databse is sucesfull`)
}).catch((err)=> console.log(`connection of database is unsuccesfull`));


app.get("/index",(req,res) => {
    res.render("index");
});

app.listen(3000,()=>{
    console.log(`sever is running at post no 3000`);
});
console.log("Sucessfully");