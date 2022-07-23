const { verifyTokenAndSeller } = require('../utils/token')
const auth = require('./auth')
const product = require('./product')
const {getProduct} = require('../controller/product')


const routes = app => {
    app.use("/api/auth", auth)
    app.use("/api/product",verifyTokenAndSeller, product)
    app.use("/",(req,res) =>{
        res.send('<h1>hello from node js</h1>')
    })
}

module.exports = routes