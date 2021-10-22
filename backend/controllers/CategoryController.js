
const catchAsyncErrors = require("../middlewares/catchAsyncErrors")
const Category=require("../models/category")
exports.addCategory= catchAsyncErrors( async (req,res,next)=>{

  console.log(req.body);
  const category=await Category.create(req.body)

  res.status(200).json({
    sucsess:true,
    message:"Category Created",
    data:category
  })
})
