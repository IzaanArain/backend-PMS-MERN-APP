const express=require("express")
const { getAllProducts, addProduct, updateProduct, deleteProduct } = require("../controller/ProductController")

const router=express.Router()

router.route('/')
.get(getAllProducts)
.post(addProduct)

router.route('/:id')
.put(updateProduct)
.delete(deleteProduct)


module.exports=router