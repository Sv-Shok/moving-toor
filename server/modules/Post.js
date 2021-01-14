const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postShema = new Schema({
    title: {
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    },
    ratingStar: {
        type: Number,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('posts', postShema);