const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title Required'],
        trim: true,
        maxLength: [100, 'Title cannot be more than 100 characters']
    },
    author: {
        type: String,
        required: [true, 'Author Required'],
        trim: true,
    },
    year: {
        type: Number,
        required: [true, 'Publication Year Required'],
        min: [1000, 'Year must be at least 1000'],
        max: [new Date().getFullYear(), 'Year cannot be more than current year'],
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Book', BookSchema);