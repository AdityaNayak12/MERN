const express = require("express")

const productRoutes  = express.Router()

const ProductModel = require("../models/products.model.js")

productRoutes.post('/', async(req, res)=>{
    let product = await ProductModel.create({
        product_name : req.body.product_name,
        product_category : req.body.product_category,
        price : req.body.price,
        ratings : req.body.ratings,
        isInStock :req.body.isInStock,
        
  });
  res.send('Product Created' , product)
});

module.exports = productRoutes
