const NAME_LENGTH = 5
const PASSWORD_LENGTH = 6
const PHONE_MIN_LENGTH = 10
const PHONE_MAX_LENGTH = 13
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

module.exports = {
    USER
}