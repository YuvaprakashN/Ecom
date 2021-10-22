
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Order = require("../models/order")


exports.orderProduct = catchAsyncErrors(async (req, res, next) => {
  const { product } = req.body;
  console.log(req.body);
  const order = await Order.create({ user: req.user.id, product })
  console.log(order);
  res.status(201).json({
    success: true,
    data: order
  })
})


exports.getOrders = catchAsyncErrors(async (req, res, next) => {
  const orders = await  Order.find({ user: req.user.id });
  console.log(orders);
  if (orders.length === 0) {
    return res.status(200).json({
      success: true,
      data: {
        message: "no Orders found"
      }
    })
  }
   res.status(200).json({
    success: true,
    data: {
      success: true,
      data: orders
    }
  })
})


exports.getOrder = catchAsyncErrors(async (req, res, next) => {
  const orders = await  Order.findById(req.params.productId).populate("product","name").populate("user","name").populate("address");
  console.log(orders);
  if (!orders) {
    return res.status(200).json({
      success: true,
      data: {
        message: "no Orders found"
      }
    })
  }
   res.status(200).json({
    success: true,
    data: {
      success: true,
      data: orders
    }
  })
})
