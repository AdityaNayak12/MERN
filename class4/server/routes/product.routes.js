const express = require("express")

const productRoutes  = express.Router()
const {
    createProduct,
    getAllProduct,
    updateProduct,
    deleteProduct
} = require("../controller/product.controllers.js")

productRoutes.post('/', createProduct)
productRoutes.get('/', getAllProduct)
productRoutes.patch('/:id', updateProduct)
productRoutes.delete('/:id', deleteProduct)

module.exports = productRoutes
