const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    book: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "books"
        }
    ]
})


const category = mongoose.model('category', categorySchema);
module.exports = category;