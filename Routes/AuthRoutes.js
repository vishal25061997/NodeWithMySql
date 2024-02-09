const express = require("express");
const controller= require("../controllers/log-sign-controller");
const authRoutes = express.Router()


authRoutes.post("/signup",controller.signup)
authRoutes.post("/login", controller.login)


module.exports ={authRoutes}