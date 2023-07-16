const mongoose=require("mongoose")
const {Schema}=mongoose

const ProductSchema= new Schema(
    {
        name:{
            type:String,
            required:[true,"please enter name"]
        },
        description:{
            type:String,
            required:[true,"please enter description"]
        },
        price:{
            type:String,
            required:[true,"please enter price of product"]
        },
        image:{
            type:String,
            default:" "
        }
    },
    {
        timestamps:true,
    }
)

module.exports=mongoose.model("Products",ProductSchema);