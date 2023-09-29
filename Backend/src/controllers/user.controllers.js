const express=require("express");
const auth=require("../models/auth.models");
const router=express.Router()

router.get("", async(req,res)=>{
    try {
        const auths=await auth.find().lean().exec();
        return res.status(200).send(auths)
    } catch (err) {
        return res.status(500).send(err)
    }
})

router.post("",async(req,res)=>{
    try {
        const auths=await auth.create(req.body).lean().exec();
        return res.status(200).send(auths);
    } catch (err) {
        return res.status(500).send({msg:err.msg});
    }
})



router.get("/:id", async(req,res)=>{
    try{
        const auths=await auth.findById(req.params.id).lean().exec();
        return res.status(200).send({auths})
    }catch(err){
        return res.status(500).send({err})
    }
})

router.put("/:id", async(req,res)=>{
    try{
        const auths=await auth.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(200).send({auths})
    }catch(err){
        return res.status(500).send({err})
    }
})

router.delete("/:id", async(req,res)=>{
    try{
        const auths=await auth.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send({auths})
    }catch(err){
        return res.status(500).send({err})
    }
})

module.exports=router;


// name:req.body.name,
//             category:req.body.category,
//             cost:req.body.cost,
//             capacity:req.body.capacity,
//             room:req.body.room,
//             bed:req.body.bed,
//             status:req.body.status,
//             img:req.file.path

//             const uploads = require("../middleware/uploads");