const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({ // Utilisez le type approprié pour votre ID
    name: { type: String, required: true },
    ingredients: { type: String, required: true },
    image: { type: String, required: true },
    stockId: { type: mongoose.Schema.Types.ObjectId, ref: 'Stock', required: true },
    quantity: { type: Number, required: true },
});


const Product = mongoose.model('Product', productSchema);

module.exports = Product;
