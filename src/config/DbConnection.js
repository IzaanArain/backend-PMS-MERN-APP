const mongoose=require("mongoose");

const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.CONNECTION_STRING)
        console.log(`database connected at : ${conn.connection.host} ${conn.connection.name}`.cyan.underline)

    }catch(error){
        console.log(error)
        process.exit(1)
    }
}

module.exports=connectDB