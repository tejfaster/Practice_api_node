class InvalidOtp extends Error {
    constructor( message = "Invalid OTP"){
        super(message)
        this.name = "Invalid OTP"
    }
}

class InvalidToken extends error {
    constructor( message = "Invalid Token"){
        super(message)
        this.name = "Invalid Token"
    }
}

class InvalidUser extends error {
    constructor( message = "Invalid User"){
        super(message)
        this.name = "Invalid User"
    }
}
module.exports = {
    InvalidToken,
    InvalidOtp,
    InvalidUser
}