const express=require("express");
const userController=require("./controllers/user.controllers")
const cors=require("cors")

const app=express()
app.use(express.json());
app.use(cors())

app.use("/users", userController)

module.exports=app;