const express=require("express");
const userController=require("./controllers/user.controllers")
const authController=require("./controllers/auth.controllers")
const registerController=require("./controllers/register.controller")
const loginController=require("./controllers/login.controller")
const cors=require("cors")
const mongoose=require("mongoose");
mongoose.set('strictQuery', true);
const app=express()
app.use(express.json());
app.use(cors())

app.use("/users", userController);
app.use("auth", authController);
app.use("register",registerController);
app.use("login", loginController);

module.exports=app;