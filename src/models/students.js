const mongoose = require("mongoose");
const validator = require("validator");

// Cratng a mongoose Schema
const StudentSchema = new mongoose.Schema( {

/*1.*/name : {
        type:String,
        required:true,
        minlength:3
    }, 
/*2.*/email: {
        type:String,
        required:true,
        unique:[true, "Email is already Used"],
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error("Invalid Email")
            }
        }
    },
/*3.*/phone: {
        type:Number,
        min:10,
        required:true,
        unique: true
        // unique:[true, "mobile Number is Used"]
    },

})

// we are creating a mongoose Collection
const Student = new mongoose.model('New-Student', StudentSchema);

module.exports = Student;