const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:{type:String, required:true},
    category:{type:String, required:true},
    cost:{type:String, required:true},
    capacity:{type:String, required:true},
    type_room:{type:String, required:true},
    type_bed:{type:String, required:true},
    status:{type:String, required:true},
    hotelPic:[{type:String, required:true}]
},
{
    versionKey: false,
    timestamps:true
}
)
module.exports=mongoose.model("users",userSchema)