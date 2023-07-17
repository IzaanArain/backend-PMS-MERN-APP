const mongoose=require("mongoose");

const CONNECTION_STRING='mongodb+srv://izaansaquib:izaan1998@procductcluster.5bblmrh.mongodb.net/ProductDatabse?retryWrites=true&w=majority'
const connectDB=async()=>{
    try{
        // const conn=await mongoose.connect(process.env.CONNECTION_STRING)
        const conn=await mongoose.connect(CONNECTION_STRING);
        console.log(`database connected at : ${conn.connection.host} ${conn.connection.name}`.cyan.underline)

    }catch(error){
        console.log(error)
        process.exit(1)
    }
}

module.exports=connectDB