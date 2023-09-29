const express=require("express");
const mongoose=require("mongoose");
const userController=require("./controllers/user.controllers")
const authController=require("./controllers/auth.controllers")
const registerController=require("./controllers/register.controller")
const loginController=require("./controllers/login.controller")
const cors=require("cors")
const app=express();


mongoose.set('strictQuery', true);
app.use(express.json());
app.use(cors())
app.use("/users", userController);
app.use("auth", authController);
app.use("register",registerController);
app.use("login", loginController);

module.exports=app;