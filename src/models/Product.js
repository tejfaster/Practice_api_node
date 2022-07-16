const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    productype:{
        type:String,
        required: true
    },
    name:{
        type:String,
        required: true
    },
    image:{
        type:String,
        required:true
    },
    size:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
},
{
    timestamps:true
}
)

module.exports = mongoose.model("Product",ProductSchema)