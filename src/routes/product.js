const router = require('express').Router()
const validate = require('../validation/validate')
const { productValidation } = require('../validation/product')
const { createProduct,
    getAllProduct,
    getProductById,
    updateProductById,
    deleteProductById,
    getProduct
} = require("../controller/product")


router.post('/create', productValidation(), validate,createProduct)
router.get('/all',getAllProduct)
router.get('/:id',getProductById)
router.put('/:id',updateProductById)
router.delete('/:id',deleteProductById)
router.get('/', getProduct)

module.exports = router