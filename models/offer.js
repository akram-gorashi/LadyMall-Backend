const mongoose = require('mongoose');

const offerSchema = mongoose.Schema ({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    phoneNumber: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('offer', offerSchema);