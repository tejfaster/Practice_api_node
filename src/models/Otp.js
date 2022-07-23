const mongoose = require("mongoose")

const otp = new mongoose.Schema({
    otp:String
},
{
    timestamp:true
})

module.exports = model("OTP",otp)