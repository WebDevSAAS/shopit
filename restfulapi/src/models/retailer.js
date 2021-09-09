const mongoose = require("mongoose");
const validator = require("validator");

const retailerSchema = new mongoose.Schema({
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
    address: {
        type: String,
        required: true
    },
})
// we will create new collections

const Retailer = new mongoose.model('Retailer', retailerSchema);
// sending schema to app.js
module.exports = Retailer;