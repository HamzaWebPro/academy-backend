const mongoose = require('mongoose');
const {Schema} = mongoose


const regSchema = new Schema({
    fullName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        unique:true,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    emailVarified:{
        type:Boolean,
        default:false
    },
    merchant:{
        type:Boolean,
        default:false
    },
    avatar:{
        type:String,
    },
    role:{
        type:String,
        default:"member",
        enum:["admin","member","merchant"]
    },
    updated:{
        type:Date,
    },
    created:{
        type:Date,
        require:true,
        default:Date.now
    },
    faceBookID:{
        type:String
    },
    linkedinID:{
        type:String
    },
    otp:{
        type:String,
    
        unique:true
    }
})


module.exports = mongoose.model("User",regSchema)