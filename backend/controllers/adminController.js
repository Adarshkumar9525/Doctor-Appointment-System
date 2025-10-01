
// import validator from "validator"
// import bcrypt from "bcrypt"
// import {v2 as cloudinary} from "cloudinary"
// import { json } from "express"
// import doctorModel from "../models/doctorModel.js"


// //apo for adding doctor
// const addDoctor = async ( req, res)=> {

//     try{
//        const { name, email,password, speciality, degree, experience, about, fees, adderess} = req.body
//         const imageFile = req.file

//        /// checking for all data to add doctor
//        if(!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !adderess)
//         {
//       return res.json({success:false,message: "Missing Details"})
//        }

//        // validating email format
//        if(validator.isEmail(email)){
//          return res.json({success:false,message: " please enter a valid email "})
//        }

//        //validate strong password
//        if ( password.length< 8 ){
//         return res.json({success:false,message: "please enter a strong password"})
//        }

//        ///hashing doctor password 
//        const salt= await bcrypt.genSalt(10)
//        const hashedpassword = await bcrypt.hash(password,salt)
//     //upload image to cloudnery
//     const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"})
//     const imageUrl = imageUpload.secure_url

//     const doctorData ={
//         name,
//         email,
//         image:imageUrl,
//         password:hashedpassword,
//         speciality,
//         degree,
//         experience,
//         about,
//         fees,
//         adderess:json.parse(adderess),
//         date:Date.now()

//     }

//     const newDoctor = new doctorModel(doctorData)
//     await newDoctor.save()
//     res.json({success:true,message:" doctor Added"})
//     } catch(error){
//         console.log(error)
//         res.json({success:false,message:error.message})

//     }
// }

// export {addDoctor}



import validator from "validator"
import bcrypt from "bcrypt"
import { v2 as cloudinary } from "cloudinary"
import doctorModel from "../models/doctorModel.js"
import jwt from 'jsonwebtoken'

// API for adding doctor
const addDoctor = async (req, res) => {
  try {
    const { name, email, password, speciality, degree, experience, about, fees, adderess } = req.body;
    const imageFile = req.file;

    // Check for all required fields (including imageFile)
    if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !adderess || !imageFile) {
      return res.status(400).json({ success: false, message: "Missing Details" });
    }

    // Validate email format (fixed logic)
    if (!validator.isEmail(email)) {
      return res.status(400).json({ success: false, message: "Please enter a valid email" });
    }

    // Validate password length
    if (password.length < 8) {
      return res.status(400).json({ success: false, message: "Password must be at least 8 characters long" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);

    // Upload image to Cloudinary with error handling
    let imageUrl;
    try {
      const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });
      imageUrl = imageUpload.secure_url;
    } catch (uploadError) {
      return res.status(400).json({ success: false, message: "Failed to upload image" });
    }

    // Parse address safely
    let parsedAddress;
    try {
      parsedAddress = JSON.parse(adderess);
    } catch (e) {
      parsedAddress = adderess; // Fallback to original if not valid JSON
    }

    // Create doctor data
    const doctorData = {
      name,
      email,
      image: imageUrl,
      password: hashedpassword,
      speciality,
      degree,
      experience,
      about,
      fees,
      adderess: parsedAddress,  // Using the safely parsed address
      date: Date.now()
    };

    // Save to database
    const newDoctor = new doctorModel(doctorData);
    await newDoctor.save();
    
    res.status(201).json({ success: true, message: "Doctor Added", doctor: newDoctor });
    
  } catch (error) {
    console.error("Error in addDoctor:", error);
    res.status(500).json({ success: false, message: error.message })
  }
}
// api for admin login
const loginAdmin = async (req,res)=>{
  try{
   const {email,password} =req.body
   if(email == process.env.ADMIN_EMAIL && password == process.env.ADMIN_PASSWORD){
        const token = jwt.sign(email+password,process.env.JWT_SECRET)
        res.json({success:true,token})
   }else {
    res.json({success:false,message:"invalid credentials"})
   }
  } catch(error){
    console.error("Error in addDoctor:", error);
    res.status(500).json({ success: false, message: error.message })
  }
}

export { addDoctor , loginAdmin };