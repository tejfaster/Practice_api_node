const router = require("express").Router()
// const Invalid = require("../exceptions/invalid")
const User = require("../models/User")
const { enpass } = require('../utls/en_de_cryptpassword')

//Register API URL 8080/api/auth/signup
const signunp = async (req, res) => {
    let user = new User(req.body)
    user.password = enpass(user.password)
    try {
        const savedUser = await user.save()
        res.status(201).json(savedUser)
        console.log(savedUser)
    } catch (err) {
        res.status(403).send({ message: err.message })
    }
}

module.exports = {
    signunp
}

