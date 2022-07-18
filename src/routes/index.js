const { verifyTokenAndSeller } = require('../utls/token')
const auth = require('./auth')
const product = require('./product')


const routes = app => {
    app.use("/api/auth", auth)
    app.use("/api/order",verifyTokenAndSeller, product)

}

module.exports = routes