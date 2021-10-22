const exp = require("constants")
const express=require("express");
const router=express.Router()

const { isAuthenticated } = require("../middlewares/auth");
const {orderProduct,getOrder,getOrders}=require("../controllers/OrderController")
router.route("/order").post(isAuthenticated,orderProduct)
router.route("/getOrder").get(isAuthenticated,getOrders)
router.route("/getOrder/:productId").get(isAuthenticated,getOrder)



module.exports=router
