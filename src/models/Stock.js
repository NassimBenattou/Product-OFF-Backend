const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    products: [{
        name: { type: String },
        ingredients: {type: String },
        image: { type: String },
        quantity: { type: Number },
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }
    }],
});

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;
