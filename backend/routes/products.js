const express = require('express');
const router = express.Router();
const { addProduct, check, updateProducts } = require("../controllers/ProductController")
const { isAuthenticated } = require("../middlewares/auth");
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

const ErrorHandler = require('../Utils/ErrorHandler');
const Product = require("../models/product")


router.route("/check").get(isAuthenticated, check)

router.route("/addProducts").post(isAuthenticated, addProduct)
router.route("/updateProducts/:productId").post(isAuthenticated, updateProducts)





module.exports = router
