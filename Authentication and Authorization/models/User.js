const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstname : {
        type : String,
        required : true,
        trim : true
    },
    lastname : {
        type : String,
        required : true,
        trim : true,
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
    },
    confirmPassword : {
        type : String
    }
})

module.exports = mongoose.model( "user" , userSchema);