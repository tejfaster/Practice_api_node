const authenticate = require('./auth')

const routes = app => {
    app.use("/api/auth",authenticate)
    // testing purpose
    app.get("/",(req,res) =>{
        res.send("hello")
    })
}

module.exports = routes