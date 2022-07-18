const router = require('express').Router()
const validate = require('../validation/validate')
const { productValidation } = require('../validation/product')
const { createProduct,
    getAllProduct,
    getProductById,
    updateProductById,
    deleteProductById
} = require("../controller/product")


router.post('/create', productValidation(), validate, (req, res) => createProduct)
router.get('/all', (req, res) => getAllProduct)
router.get('/:id', (req, res) => getProductById)
router.put('/:id', (req, res) => updateProductById)
router.delete('/:id', (req, res) => deleteProductById)

module.exports = router