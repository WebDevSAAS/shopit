const express = require("express");
const router = new express.Router();
const Student = require("../models/students");
const Retailer = require("../models/retailer");


// example -------------
//router.get('/abhi', (req, res) => {

//     res.send('guys abhi is here :)')
// });
// -----------------------



// create a new students
router.post('/students', async (req, res) => {

    // asking to give me the data whatever i have saved-
    // it'll send us the data into json  format so we have
    // used the app.use(express.json()); to convert it
    console.log(req.body);
    //  to handle error
    // to send the data into mongodb 
    try {
        const user = new Student(req.body)
        const createUser = await user.save()
        res.status(201).send(createUser);
    } catch (e) {
        res.status(400).send(e);
    }
    
    
    
    //    res.send('hello from simple server :)')

})



// create for new retailer

router.post('/retailer', async (req, res) => {
    
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

// we have to change app.get,app.push,app.patch all
//  the things with router.get ,router.push and so on
// so basically instead of app we have to write router in this file



// to read the data--------for customer
// ****************---------------working-------------------***************************
// app.get('/students' , async(req , res)=>{
    
//    try{
    //        const studentData= await Student.find();
//        res.send(studentData);
//    }catch(e)
//    {
    //        res.send(e);
    //    }
    // })
    
    
    // to read the data--------for retailer
    // ****************---------------working-------------------***************************
    // app.get('/retailer', async(req, res) => {
        
        //     try {
            //         const retailerData = await Retailer.find();
            //         res.send(retailerData);
            //     } catch (e) {
                //         res.send(e);
                //     }
                // })
                
                // to get the data for perticular persion
                // *****************--------------------working----------------------------------**********************
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
        
        
        
        // to delete a data from database by perticular ID
        // ****************---------------working-------------------***************************
        
        // app.get('/students/:id', async (req, res) => {
            //     try{
                //         const _id = req.params.id;
                //         const deletedata=await Student.findByIdAndDelete(_id);
                //         console.log(deletedata);
                //         if (!deletedata)
                //         {
                    //             return res.status(400).send();
                    //         }
                    //         else
                    //         {
                        //             res.status(500).send(deletedata);
                        //         }
                        //     }catch(e){
                            //         res.send(e);
                            //     }
                            // })
                            
                            
                            // update the data with the help of id i data base
                            // ****************---------------working-------------------***************************
                            // app.patch("/students/:id", async(req,res)=>{
//     try {
    //         const _id =req.params.id;
    //         const updateData =await Student.findByIdAndUpdate(_id,req.body,{
        //             new:true
        //         });
        //         res.status(400).send(updateData);

//     } catch (e) {
    //         res.status(200).send(updateData);
    //     }
    // })
    
    
    module.exports=router;