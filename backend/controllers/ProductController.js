const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const ErrorHandler = require("../Utils/ErrorHandler");
const Product = require("../models/product")

//Add products
exports.addProduct = catchAsyncErrors(async (req, res, next) => {
  req.body.user = req.user.id
  const { name, description,category, stock, price, user } = req.body;

  const product = await Product.create({ name, description, category,stock, price, createdBy: user })

  res.status(201).json({
    success: true,
    data: product
  })
}
)


//Update products
exports.updateProducts = catchAsyncErrors(async (req, res, next) => {
  console.log("Req");
  console.log(req.body);
  console.log(req.params);
  let productId = req.params.productId;
  let prod = await Product.findOne({ id: productId })
  console.log("Product search");
  console.log(prod);
  if (!prod) {
    return next(new ErrorHandler("Product Not Found", 404))
  }
  if (prod.createdBy.toString() !== req.user.id)
    return next(new ErrorHandler("User Not Authenticated to update", 401))
  const { name, description, stock, price } = req.body;
const unmodifyProperty=["isDeleted","createdBy","upDatedDate","createdDate"]

unmodifyProperty.map(m=>delete req.body[m])

const product = await Product.findByIdAndUpdate(productId, req.body, {
    new: true,
    runValidators: true
  })



  res.status(201).json({
    success: true,
    data: product
  })
})

exports.check = catchAsyncErrors(async (req, res, next) => {
  console.log("Check");
  res.status(200).json({
    success: true
  })
})
