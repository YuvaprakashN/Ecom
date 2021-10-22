const mongoose=require("mongoose")
const validator=require("validator")
const slugify=require("slugify")
const productSchema=new mongoose.Schema({
name:{
  type:String,
  required:[true,"Please enter the product name"]
},
slug:String,
description:{
  type:String,
  required:[true,"Please enter the product Description"]
},
price:{
  type:Number,
  required:[true,"Please enter price"],
  min:1
},
stock:{
  type:Number,
  default:0
},


createdBy:{
  type:mongoose.Schema.ObjectId,
  ref:"User",
  required:true
},
category:{
  type:mongoose.Schema.ObjectId,
  ref:"Category",
  required:true
},
isDeleted:{
type:Boolean,
default:true
}
},
{timestamps:true})


productSchema.pre("save",function(next){
console.log("PRE SAve");
  let s=slugify(this.name,{lower:true})
console.log(s);
  this.slug=s
  next()
})

productSchema.post("findOneAndUpdate",function(doc){
console.log("POST UPDATE: Check modification");
//console.log(this.isModified());
  // if(this.isModified()) {
    console.log(doc.name);
this.upDatedDate=Date.now
   // }
//next()

})

module.exports=mongoose.model("Product",productSchema)
