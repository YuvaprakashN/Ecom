const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const User = require("../models/users");
const Address=require("../models/address")
const ErrorHandler = require("../Utils/ErrorHandler");
const sendToken = require("../Utils/jwtToken")

exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const address=await Address.create(req.body.address)


  const { email, password, name } = req.body;

  let user = await User.create({ name, email, password })
console.log(user.id);
console.log(address.id);
  user=await User.findByIdAndUpdate(
    user.id,
    {$push: {address:address.id}},
     {new: true,runValidators: false})

  return res.status(201).json(user)
  sendToken(user, 200, res);
})

exports.login = catchAsyncErrors(async (req, res, next) => {

  const user =await User.findOne({ email: req.body.email }).select("+password")
 // console.log(user);
  if (!user)
  { return next(new ErrorHandler("Email or password incorrect", 401))}

  const isValidUser=await user.comparePassword(req.body.password)
  //console.log(isValidUser);
  if (!isValidUser)
   { return next(new ErrorHandler("Email or password incorrect", 401))}
  sendToken(user,200,res)
})
