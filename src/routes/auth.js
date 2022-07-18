const router = require("express").Router()
const { signUp, signIn } = require("../controller/authentication")
const validate = require("../validation/validate")
const { signUpValidation, signInValidation } = require("../validation/auth")

router.post('/signup', signUpValidation(), validate, signUp)
router.post('/signin', signInValidation(), validate, signIn)




module.exports = router