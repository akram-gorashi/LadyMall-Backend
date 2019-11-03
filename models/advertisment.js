const mongoose =require('mongoose');

const advertismentSchema = mongoose.Schema ({
    imageUrl : String,
});

module.exports = mongoose.model('advertisment',advertismentSchema);