const Product = require("../models/Product")

// createProduct URL => 8080/api/product/create
const createProduct = async (req, res) => {
    try {
        const id = req.user.id
        if (id) {
            const data = new Product(req.body)
            data.userid = id
            console.log(data)
            const savedProduct = await data.save()
            return res.status(201).json(savedProduct)
        }
    } catch (err) {
        return res.status(422).send({ message: err.message })
    }
}

//get all product by Seller Id => 8080/api/product/all
const getAllProduct = async (req, res) => {
    try {
        const userdata = await Product.aggregate([
            {
                $match: { userid: req.user.id }
            }
        ])
        console.log(userdata)
        return res.status(200).json(userdata)
    } catch (err) {
        return res.status(422).send({ message: err.message })
    }
}

//get product by Id => 8080/api/product/:id
const getProductById = async (req, res) => {
    try {
        const userdata = await Product.findById(req.params.id)
        return res.status(200).json(userdata)
    } catch (err) {
        return res.send(422).send({ message: err.message });
    }
}

//update product by Id => 8080/api/product/:id
const updateProductById = async (req, res) => {
    try {
        const updateProduct = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
        res.status(200).json(updateProduct)
    } catch (err) {
        return res.status(422).send({ message: err.message })
    }
}

//delete product by Id => 8080/api/product/:id
const deleteProductById = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been deleted")
    } catch (err) {
        return res.status(422).send({ message: err.message })
    }
}

const getProduct = async (req, res) => {
    try {
        const allProduct = await Product.find()
        res.status(200).json(allProduct)
    } catch (err) {
        return res.status(422).send({ message: err.message })
    }
}

module.exports = {
    createProduct,
    getAllProduct,
    getProductById,
    updateProductById,
    deleteProductById,
    getProduct
}