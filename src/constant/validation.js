const NAME_LENGTH = 5
const PASSWORD_LENGTH = 6
const PHONE_MIN_LENGTH = 10
const PHONE_MAX_LENGTH = 13
const PRICE_LENGTH = 1
const SIZE_LENGTH = 1

const USER = {
    NAME: {
        MESSAGE : `name should be at least ${NAME_LENGTH} char`,
        LENGTH : NAME_LENGTH
    },
    EMAIL: {
        MESSAGE: "Invalid Email"
    },
    PASSWORD: {
        MESSAGE: `password should be at least ${PASSWORD_LENGTH} char`,
        LENGTH: PASSWORD_LENGTH,
    },
    PHONE: {
        MESSAGE: `phone should be at least ${PHONE_MIN_LENGTH} char`,
        LENGTH_MIN: PHONE_MIN_LENGTH,
        LENGTH_MAX: PHONE_MAX_LENGTH
    },
}

const PRODUCT = {
   NAME:{
    MESSAGE:`Please enter name of your product`,
    LENGTH: NAME_LENGTH
   },
   PRICE:{
    MESSAGE:`Please enter price of product`,
    LENGTH: PRICE_LENGTH
   },
   SIZE:{
    MESSAGE: `Please enter size of your item`
   }

}
module.exports = {
    USER,
    PRODUCT
}