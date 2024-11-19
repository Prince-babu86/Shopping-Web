const mongoose = require("mongoose");

// mongoose.connect('mongodb://127.0.0.1:27017/E-COMMERCE')


const ownerSchema = mongoose.Schema({
    fullname:String,
    email:String,
    password:String,
    cart:{
        type:Array , default:[]
    },
    products:{
        type:String,
        default:[]
    },
    picture:String,
    gstin:String
});


module.exports = mongoose.model('owner' , ownerSchema);

