const bcrypt=require('bcrypt');
const {Hoteluser} =require('../Models/User');
const multer=require('multer');

const register=async(req,res)=>{
    const data=req.body;
    console.log(data);

    let email1=data.email;
    let firstname1=data.firstname;
    let lastname1=data.lastname;
    let password1=data.password;
    //unique username
    const existingUser=await Hoteluser.findOne({username:data.email1});
    if (existingUser) {
        return res.status(400).send('username already exists')
    }
    //validate user
    if(!email1||!firstname1||!password1||lastname1)
    {
        res.status(400).send("Missing user Information");
    }
    //validate email Pattern
    const emailPattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(email1)) {
        res.status(400).send("Invalid email format");
        return;
    }

    //Validate Password
    const passwordPattern=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if(!passwordPattern.test(password1))
    {
        res.status(400).send("Invalid password format");
        return ;
    }
    // encrypt the password and save it to the database
    const encryptAndSavePassword=async()=>{
        try {
            const saltPassword=10;
        const hashedPassword=await bcrypt.hash(password1,saltPassword);
        data.password=hashedPassword;
        const newUser=new Hoteluser(data);
        await newUser.save();
        console.log("user data saved successfully");
        } catch (error) {
            console.error('Error saving user data',error);
        }
    }
    encryptAndSavePassword();
    res.sendStatus(200);        
}
module.exports=register;