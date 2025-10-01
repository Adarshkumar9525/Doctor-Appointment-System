import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name:{type:String,requred:true},
    email:{type:String,requred:true,unique:true},
    password:{type:String,requred:true},
    image:{type:String,requred:true},
    speciality:{type:String,requred:true},
    degree:{type:String,requred:true},
    experience:{type:String,requred:true},
    about:{type:String,requred:true},
    available:{type:Boolean,default:true},
    fees:{type:Number,requred:true},
    address:{type:Object,requred:true},
    date:{type:Number,requred:true},
    slots_booked:{type:Object,default:{}},

}, {minimize:false})


const doctorModel = mongoose.models.doctor || mongoose.model('doctor',doctorSchema)
export default doctorModel