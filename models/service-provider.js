const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    name: {
        trype: String,
        require: true
    },
    phoneNumber: {
        trype: String,
        require: true
    }
})