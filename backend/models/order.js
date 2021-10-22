const mongoose = require("mongoose");
const { getUser } = require("../controllers/UserController");

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Please enter the user details"]
  },
  product: {
    type: mongoose.Schema.ObjectId,
    ref: "Product",
    required: [true, "Please enter the product details"]
  },
  status: {
    type: String,
    required: [true, "Please enter the status of order"],
    enum: {
      values: ["Ordered", "Cart", "Shipped", "Cancelled", "Delivered"],
      message: "Please provide valid status"
    },
    default: "Cart"
  },
  quantity: {
    type: Number,
    default: 1,
    required: [true, "Please enter the quantity"],
  },
  address: {
    type: mongoose.Schema.ObjectId,
    ref: "Address",
  }
}, { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } })

orderSchema.post("save", async function (doc) {

  const user=await getUser(doc.user)
if(!this.address)
  this.address = user.address[0]
})

orderSchema.virtual("userDetails", {
  ref: "User",
  localField: "user",
  foreignField: "_id"
})

const order = mongoose.model("Order", orderSchema)

module.exports = order

