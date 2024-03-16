const express=require('express');
const bcrypt=require('bcrypt');
const {sign}=require('jsonwebtoken');
const dotenv=require('dotenv');
const {Hoteluser}=require('../Models/User');
dotenv.config();
const accessSecret="your_access_secret_value_here";
//LOGIN FUNCTIONALITY

const login=async(req,res)=>{
    try {
        /* Take the infomation from the form */
        const { email, password } = req.body
    
        /* Check if user exists */
        const user = await Hoteluser.findOne({ email });
        if (!user) {
          return res.status(409).json({ message: "User doesn't exist!" });
        }
    
        /* Compare the password with the hashed password */
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
          return res.status(400).json({ message: "Invalid Credentials!"})
        }
    
        /* Generate JWT token */
        const token = sign({ id: user._id }, accessSecret)
        delete user.password
    
        res.status(200).json({ token, user })
    
      } catch (err) {
        console.log(err)
        res.status(500).json({ error: err.message })
      }
    }
module.exports=login;

