const mongoose=require("mongoose")

exports.mongooseConnection=()=>{mongoose.connect(process.env.MONGOOSE_URL)
        .then(c=>console.log(`Mongodb: ${c.connection.host}`))
        .catch(e=>console.log("Mongodb failed to connect. ERROR: "+e))
}
