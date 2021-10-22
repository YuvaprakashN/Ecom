const express=require("express")

//Configure ENV variables
const dotEnv=require("dotenv")
dotEnv.config({path:"./backend/config/config.env"})



//import mongoose connection
const {mongooseConnection}=require("./database/mongodb")
mongooseConnection()

const app=express()
app.use(express.json())

//Import Routes
const ProductRoutes=require("./routes/products");
const CategoryRoutes=require("./routes/category")
const AuthRoutes=require("./routes/auth")
const OrderRoute=require("./routes/order")
app.use("/auth",AuthRoutes)
app.use("/products",ProductRoutes)
app.use("/category",CategoryRoutes)
app.use("/orders",OrderRoute)

//Import errorHandler
const ErrorHandler=require("./middlewares/errors")
app.use(ErrorHandler)

const PORT=process.env.PORT
app.listen(PORT,()=>console.log(`Server is up: ${PORT}`))
