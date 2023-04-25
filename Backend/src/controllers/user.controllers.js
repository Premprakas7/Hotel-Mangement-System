const express=require("express");
const User=require("../models/user.models");
const uploads = require("../middleware/uploads");
const router=express.Router()


router.get("", async(req,res)=>{
    try {
        const users=await User.find().lean().exec();
        return res.status(200).send(users)
    } catch (err) {
        return res.status(500).send(err)
    }
})

router.post("", uploads.single("profile"),async(req,res)=>{
    try {
        const users=await User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            profile:req.file.path
        }).lean().exec();
        return res.status(200).send(users);
    } catch (err) {
        return res.status(500).send(err);
    }
})


router.post("/multiple", uploads.any("profile"), async (req, res) => {
    try {
      const filePaths = req.files.map((file) => {
        return file.path;
      });
      const users=await User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        profile:filePaths
    }).lean().exec();

      return res.status(200).send(users);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });


router.get("/:id", async(req,res)=>{
    try{
        const users=await User.findById(req.params.id).lean().exec();
        return res.status(200).send({users})

    }catch(err){
        return res.status(500).send({err})
    }
})

router.put("/:id", async(req,res)=>{
    try{
        const users=await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(200).send({users})
    }catch(err){
        return res.status(500).send({err})
    }
})

router.delete("/:id", async(req,res)=>{
    try{
        const users=await User.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send({users})
    }catch(err){
        return res.status(500).send({err})
    }
})

module.exports=router