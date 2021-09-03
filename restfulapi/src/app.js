const express =require("express");
const Retailer = require("./models/retailer");
require("./db/conn");
const Student=require("./models/students");


const app= express();

// to convert json file comming from postman into readable file
app.use(express.json());


const port = process.env.PORT || 8000;

// app.get('/' , (req , res)=>{
//    res.send('hello from other side :)')
// })

// create a new students
app.post('/students' ,async (req , res)=>{

    // asking to give me the data whatever i have saved-
    // it'll send us the data into json  format so we have
    // used the app.use(express.json()); to convert it
    console.log(req.body);
    //  to handle error
    // to send the data into mongodb 
    try{
        const user= new Student(req.body)
        const createUser = await user.save()
        res.status(201).send(createUser);
    }catch(e){
        res.status(400).send(e);
    }
    


//    res.send('hello from simple server :)')

})



// create for new retailer

app.post('/retailer', async(req, res) => {

    // asking to give me the data whatever i have saved-
    // it'll send us the data into json  format so we have
    // used the app.use(express.json()); to convert it
    console.log(req.body);
    //  to handle error
    // to send the data into mongodb 
    try {
        const user = new Retailer(req.body)
        const createUser = await user.save()
        res.status(201).send(createUser);
    } catch (e) {
        res.status(400).send(e);
    }
    //    res.send('hello from simple server :)')
})
app.listen(port,() =>{
    console.log(`connection established at ${port}`);
})