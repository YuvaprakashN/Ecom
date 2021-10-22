const express=require("express")
const router=express.Router()


const {registerUser,login }=require("../controllers/AuthController")


router.route("/registerUSer").post(registerUser)
router.route("/login").post(login)


module.exports=router
