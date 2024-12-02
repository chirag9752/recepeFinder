const user = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

exports.signUp = async(req , res) => {
    try{
        const {firstname , lastname , email , password } = req.body;

        const existingUser = await user.findOne({email});

        if(existingUser)
        {
            return res.status(400).json({
                success : false,
                message : 'User already exists'
            });
        }

        let hashPassword;

        try{
            hashPassword = await bcrypt.hash(password , 10);        // 10 is no of salt rounds
        }catch(error)
        {
            return res.status(500).json({
                success : false,
                message : "Error in hashing password"
            })
        }
        // create entry in db
        await user.create(
        {firstname ,lastname , email , password : hashPassword});


    return res.status(200).json({
        success : true,
        message : "successfully created entry in db",
    })
        
    }catch(error)
    {
        console.error(error);
        return res.status(500).json({
            success : false,
            message : "user can't be register please try again later"
        })
    }
}

exports.login = async(req , res) => {
    try{

        const {email , password} = req.body;

        if(!email || !password)
        {
           return res.status(400).json({
            success : false,
            message : "please fill all the details"
           })
        }

        let existingUser = await user.findOne({email});

        if (!existingUser) {
            return res.status(404).json({
                success: false,
                message: "User not found. Please register first."
            });
        }

        // verify password and generate jwt token

        const payload = {                                                         // payload means excat data jo use karna chahte ho token ke andar
            email : existingUser.email,     
            id : existingUser._id,
            role : existingUser.role,
        }

        if(await bcrypt.compare(password , existingUser.password.toString())) {
            
              let token = jwt.sign(payload , process.env.JWT_SECRET , {
                expiresIn : "2h"
              } )

        // const oldUser = {...existingUser , token};
        // oldUser.password = undefined;

        existingUser = existingUser.toObject();
        existingUser.token = token;
        existingUser.password = undefined;
        console.log(existingUser);

        const options = {
            expiresIn : new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            httpOnly  : true,
        }

        res.cookie("babbarCookie" , token , options).status(200).json({
            success : true,
            token,
            existingUser,
            message : 'user loggedin successfully'
        })

        }
        else {
            return res.status(401).json({
                success: false,
                message: "Incorrect email or password"
            });
        }
    }catch(error)
    {
        console.error(error);
        res.status(500).json({
            success : false,
            message : "unable to login please check the code"
        })
    }
}
