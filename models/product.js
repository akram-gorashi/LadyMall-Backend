const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    imageUrl: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    rate: {
        type: Number,
    }
});
module.exports = mongoose.model('product', productSchema);