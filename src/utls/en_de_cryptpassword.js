const CryptoJS = require('crypto-js')

const enpass = (password) => {
    return CryptoJS.AES.encrypt(password,process.env.PASS_SECRET_KEY).toString()
}

const depass = (password) => {
    return CryptoJS.AES.decrypt(password,process.env.PASS_SECRET_KEY).toString(CryptoJS.enc.Utf8)
}

module.exports = {
    enpass,
    depass
}