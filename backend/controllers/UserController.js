

const catchAsyncErrors = require("../middlewares/catchAsyncErrors")
const User=require("../models/users")
const ErrorHandler = require("../Utils/ErrorHandler")

exports.getUser=async (userId)=>{
  console.log("user id "+userId);
const user=await User.findById(userId).populate("address")

if(!user){
  return new ErrorHandler("Noit found",404)
}
return user
}
