const {body} = require('express-validator')
const {PRODUCT} = require("../constant/validation")


module.exports.productValidation = () =>{
    return[
        body('name',PRODUCT.NAME.MESSAGE)
        .isLength({min:PRODUCT.NAME.LENGTH}),

        body('price',PRODUCT.PRICE.MESSAGE)
        .isLength({min:PRODUCT.PRICE.LENGTH}),

        body('size',PRODUCT.SIZE.MESSAGE)
        .isLength({min:PRODUCT.SIZE.LENGTH}),
    ]
}