const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Auth = require('../models/auth.model')
const secreteKey = 'secreteKey'

router.post('',async(req,res)=>{
    const {email,password} =req.body
    Auth.findOne({email:email},async(err,auth)=>{
        if(auth){
            if(password == auth.password){
                jwt.sign({auth},secreteKey,{expiresIn:'500s'},(err,token)=>{
                    res.send({token})
                })
            }
            else{
                res.send({message:"Name doesn't match"})
               }
        }
        else{
            res.send({message:"user not found"})
        }
    })
})
module.exports = router