const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:{type:String, required:true},
    category:{type:String, required:true},
    cost:{type:String, required:true},
    capacity:{type:String, required:true},
    room:{type:String, required:true},
    bed:{type:String, required:true},
    status:{type:String, required:true},
    img:{type:String, required:true}
},
{
    versionKey: false,
    timestamps:true
}
)
module.exports=mongoose.model("users",userSchema)