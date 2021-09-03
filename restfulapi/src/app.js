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

// to read the data--------for customer

app.get('/students' , async(req , res)=>{

   try{
       const studentData= await Student.find();
       res.send(studentData);
   }catch(e)
   {
       res.send(e);
   }
})


// to read the data--------for retailer

app.get('/retailer', async(req, res) => {

    try {
        const retailerData = await Retailer.find();
        res.send(retailerData);
    } catch (e) {
        res.send(e);
    }
})

// to get the data for perticular persion

// app.get('/students/:name(we can place here based on what we are searching)' , (req , res)=>{
// app.get('/students/:id' , async(req , res)=>{
//     try{
//         const _id = req.params.id;
//         const studentdata=await Student.findById(_id);
//         console.log(studentdata);
//         if (!studentdata)
//         {
//             return res.status(404).send();
//         }
//         else
//         {
//             res.send(studentdata);
//         }
//     }catch(e){
//         res.send(e);
//     }
// })


app.listen(port,() =>{
    console.log(`connection established at ${port}`);
})