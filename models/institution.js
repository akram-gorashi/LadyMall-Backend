const mongoose = require('mongoose');

const institutionSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    imageUrl: {
        type: String,
        require: true
    },
});
module.exports = mongoose.model('institution', institutionSchema);