const mongoose = require("mongoose")
const {ENUM_PRODUCT} = require('../constant/product')

const ProductSchema = new mongoose.Schema({
    userid:{
        type:String,
        required :true
    },
    productype:{
        type:String,
        enum:ENUM_PRODUCT,
        default:ENUM_PRODUCT[0]
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
        type:String,
        required:true
    }
},
{
    timestamps:true
}
)

module.exports = mongoose.model("Product",ProductSchema)