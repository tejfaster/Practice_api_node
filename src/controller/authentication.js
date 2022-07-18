const User = require("../models/User")
const { enpass, depass } = require('../utls/en_de_cryptpassword')
const { InvalidUser } = require('../exceptions/invalid')
const { refreshToken } = require('../utls/token')



//Register API URL 8080/api/auth/signup
const signUp = async (req, res) => {
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

//Login API URL 8080/api/auth/signin
const signIn = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        const hashedPassword = depass(user.password)
        if (!user) {
            res.status(422).json("Invalid email")
        } else if (hashedPassword !== req.body.password) {
            throw new InvalidUser()
        } else {
            const token = refreshToken(user.id, user.usertype, user.name)
            const { password, ...users } = user._doc
            res.status(200).json({ users, token })
        }
    } catch (err) {
        return res.status(422).send({ message: err.message })
    }

}

module.exports = {
    signUp,
    signIn
}