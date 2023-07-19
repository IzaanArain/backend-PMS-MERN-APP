const express=require("express")
require("dotenv").config()
const ProductRoutes=require('./routes/ProductRoutes')
const colors=require("colors")
const connectDB = require("./config/DbConnection")
const cors=require('cors')
const errorHandler = require("./middleware/ErrorHandler")


// connectDB()
const app=express()


//middlewares
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use((req,res,next)=>{
    console.log(`${req.method} ${req.path}`.magenta.italic)
    next()
})

app.use("/api/products/",ProductRoutes)
app.use(errorHandler)
app.get('/',(req,res)=>{
    res.send("<h1>this is a test</h1>")
})

app.get('/:name',(req,res)=>{
    res.send(`<h1>this is a ${req.params.name}</h1>`)
})

const PORT=process.env.PORT || 3000

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server conected on port http://localhost:${PORT}`.yellow)
        console.log(`Server conected on port http://localhost:${PORT}/api/products`.yellow)
    })
})

// const PORT=process.env.PORT || 3000
// app.listen(PORT,()=>{
//     console.log(`Server conected on port http://localhost:${PORT}`.yellow)
//     console.log(`Server conected on port http://localhost:${PORT}/api/products`.yellow)
// })