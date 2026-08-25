const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const productRoutes = require("./routes/product.routes.js")


dotenv.config()

const app = express()
app.use(express.json())
app.use('/api/product', productRoutes)

mongoose.connect(process.env.dbUrl).then(()=>{
    console.log("DB connected")

}).catch((err)=>{
    console.log(err)
})
   

app.get('/', (req, res)=>{
    res.send("hello from server")
})


app.listen(8006,()=>{
    console.log("Server Ready")
})