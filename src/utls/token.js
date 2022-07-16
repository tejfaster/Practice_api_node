const jwt = require('jsonwebtoken')

module.exports.refreshToken = (data, data1, data2) => {
    return jwt.sign(
        {
            id: data,
            usertype: data1,
            name: data2
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: "3d"
        }
    )
}

module.exports.verifyToken = (req,res,next) => {
    const authHeader = req.headers.token
    if (authHeader){
        const token = authHeader.split(" ")[1]
        jwt.verify(token,process.env.JWT_SECRET_KEY,(err,user) => {
            if (err) res.status(403).json("Token isn't valid!")
            req.user = user
            next()
        })
    }else{
        return res.status(401).json("you are not authenticated!")
    }
}