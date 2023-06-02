const mongoose = require('mongoose')

const HouseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    
    desc:{
        type: String,
        required: true
    },

    address:{
        type: String,
        required: true
    },

    location:{
        type: String,
        required: true
    },

    price:{
        type: Number,
        required: true
    },

    img:{
        type: String,
        
    },

    imgArray:{
        type: Array
    }
},
{timestamps: true},
)

module.exports = mongoose.model('happyAbodeHomes', HouseSchema)