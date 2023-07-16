const Product=require("../models/ProductModel")
const asyncHandler=require('express-async-handler')
const mongoose=require("mongoose")

//@desc fetch all products
//@route GET /api/products/
//@access Public
const getAllProducts=asyncHandler(async(req,res)=>{
    const products=await Product.find({}).sort({ createdAt: -1 });
    res.status(200).json(products)
    //  res.status(200).json({message:"get all product"})
})

//@desc add a product
//@route POST /api/products/
//@access Public
const addProduct=asyncHandler(async(req,res)=>{
    const {name,description,price,image}=req.body
    if(!name || !description || !price){
        res.status(400)
        throw new Error("all feilds mandatory")
    }
    const product=await Product.create({
        name,
        description,
        price,
        image
    })
    res.status(200).json(product)
    // res.status(200).json({message:"add or post a product"})
})

//@desc update a product
//@route PUT /api/products/
//@access Public
const updateProduct=asyncHandler(async(req,res)=>{
    const {id}=req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404);
        throw new Error("No such product");
      }

    const product=await Product.findById(id)
    if(!product){
        throw new Error("product does not exit")
    }
    const {name,description,price,image}=req.body

    const updatedProduct=await Product.findByIdAndUpdate(
        id,
        req.body,
        {new:true}
    )
    res.status(200).json(updatedProduct)
    // res.status(200).json({message:"update a product"})
})

//@desc delete a product
//@route DELETE /api/products/
//@access Public
const deleteProduct=asyncHandler(async(req,res)=>{
    const {id}=req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404);
        throw new Error("No such product");
      }

    const product=await Product.findById(id)
    if(!product){
        res.status(404)
        throw new Error("product does not exit")
    }
   
    const deletedProduct=await Product.findByIdAndDelete(id)
    res.status(200).json(deletedProduct)
    // res.status(200).json({message:"delete a product"})
})

module.exports={
    getAllProducts,
    addProduct,
    updateProduct,
    deleteProduct
}