const mongoose=require("mongoose");
const userSchema=mongoose.Schema({
    id:{
        type:String,
        required:true,

    },
    userid:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    dateadded:{
        type:Date,
        default:Date.now()
    }
})
const user=mongoose.model("user",userSchema);
module.exports=user;