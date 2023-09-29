const express=require("express");
const authController=require("./controllers/auth.controllers")
const cors=require("cors")

const app=express()
app.use(express.json());
app.use(cors())

app.use("/auths", authController)

module.exports=app;