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
    number : {
        type : Number,
        required : true,
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
        type : String,
        required : true,
    }
})

module.exports = mongoose.model( "user" , userSchema);