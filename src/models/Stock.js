const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    products: [{
        name: String,
        ingredients: String,
        image: String,
        quantity: Number,
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }
    }],
});

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;
