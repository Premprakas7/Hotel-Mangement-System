const express = require('express')
const router = express.Router()
const Auth = require('../models/auth.model')


router.post('' , async(req,res)=>{
    const {email,password,name} = req.body
    Auth.findOne({email:email}, async(err,auth)=>{
        if(auth){
            res.send({message:"user Already Registerd"})
        }else{
            const auth = new auth({
                email,
                password,
                name
            })
            auth.save(err=>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message:"Sucessfully Registered"})
                }
            })
            
        }
    })

}) 
module.exports = router