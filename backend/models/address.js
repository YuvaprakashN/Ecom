const mongoose=require("mongoose")


const addressSchema=new mongoose.Schema({
  line1:{
    type:String,
    required:true
  },
  line2:{
    type:String,
    required:true
  },
  line3:{
    type:String,
    required:true
  },
  city:{
    type:String,
    required:true
  },
  state:{
    type:String,
    required:true
  },
  country:{
    type:String,
    required:true
  }
},{timestamps:true})

const address=mongoose.model("Address",addressSchema)
module.exports=address
