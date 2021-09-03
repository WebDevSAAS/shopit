const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlength: 3
    },
    email: {
        type: String,
        require: true,
        unique: [true, "E-mail Id is already present"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email")
            }
        }
    },
    password: { 
        type: String, 
        required: true
    },
    repassword: { 
        type: String, 
        required: true
    }
})
// we will create new collections

const Student = new mongoose.model('Student',studentSchema);
// sending schema to app.js

module.exports= Student;