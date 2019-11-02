const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phoneNumber: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    streetName: {
        type: String,
        require: true
    },
    mainStreet: {
        type: String,
        require: true
    },
    subStreet: {
        type: String,
        require: true
    },
    houseNumber: {
        type: String,
        require: true
    },
});
module.exports = mongoose.model('user', userSchema);
