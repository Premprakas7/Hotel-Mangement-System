const express=require("express");
const User=require("../models/user.models");
// const uploads = require("../middleware/uploads");
const router=express.Router()


router.get("", async(req,res)=>{
    try {
        const users=await User.find().lean().exec();
        return res.status(200).send(users)
    } catch (err) {
        return res.status(500).send(err)
    }
})

router.post("", async(req,res)=>{
    try {
        const users=await User.create(req.body).lean().exec();
        return res.status(200).send(users);
    } catch (err) {
        return res.status(500).send(err);
    }
})

module.exports=router