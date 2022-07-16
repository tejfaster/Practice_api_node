const { body } = require('express-validator')
const {USER} = require("../constant/validation")
const User = require('../models/User')

const isEmailAvailable = (email) =>{
    return User.findOne({email}).then((user) =>{
        if (user) {
            return Promise.reject("Email already taken")
        }
    })
}


const signUpValidation = () => {
    return [
        body('name',USER.NAME.MESSAGE).isLength({
            min: USER.NAME.LENGTH,
        }),

        body('email',USER.EMAIL.MESSAGE)
        .isEmail()
        .bail()
        .custom(isEmailAvailable),

        body('password',USER.PASSWORD.MESSAGE)
        .isLength({
            min:USER.PASSWORD.LENGTH,
        }),

        body('phone',USER.PHONE.MESSAGE)
        .isLength({
            min:USER.PHONE.LENGTH_MIN,
            max:USER.PHONE.LENGTH_MAX
        })
    ]
}

module.exports = {
    signUpValidation
}