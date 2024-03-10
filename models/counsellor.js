import { Model } from "mongoose"
const mongoose = require('mongoose')
const CounsellorSchema = mongoose.Schema({
    CID:{
        type:String,
        unique:true,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    branch:{
        type:String,
        required:true,
    },
    designation:{
        type:String,
        required:true,
    },
    StdentID:{
        type:String,
        unique:true,
        required:true,
    },
})
const CounsellorModel = mongoose.model("Counsellor",CounsellorSchema)
module.exports = CounsellorModel
