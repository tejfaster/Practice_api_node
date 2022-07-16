const mongoose = require("mongoose")
const {app} = require("./src/app")

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("DB is connected")
})
.catch(err =>{
    console.log(err.message)
})


app.listen(process.env.PORT,() => console.log("server is running at :",process.env.PORT))