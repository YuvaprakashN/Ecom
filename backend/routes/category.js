const express=require("express")
const router=express.Router()

const { addCategory}=require("../controllers/CategoryController")
const {isAuthenticated}=require("../middlewares/auth")

router.route("/addCategory").post(isAuthenticated,addCategory)


module.exports=router
