const mongoose=require("mongoose");

const authSchema=new mongoose.Schema({
   name:{type:String, required:true},
    email:{type:String, required:true,unique:true,sparse:true,index:true},
    password:{type:String, required:true},
},
{
    versionKey:false
})

module.exports=mongoose.model("auth", authSchema);