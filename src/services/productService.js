const Stock = require('../models/Stock');
const Product = require('../models/Product');

const addProductToStock = async (productId, stockId) => {

    // Recherche du produit par son ID
    const product = await Product.findById(productId);

    // Recherche du stock par son ID
    const stock = await Stock.findById(stockId);

    // Vérifie si le produit et le stock existent
    if (!product || !stock) {
        throw new Error("Product or Stock not found");
    }

    // Ajoute l'ID du produit au stock
    stock.products.push(product._id);

    await stock.save();
    return stock;
};

const getStockById = async (stockId) => {
    // Retourne le stock par son ID et ajoute les détails des produits associés
    return await Stock.findById(stockId).populate('products');
};

module.exports = { addProductToStock, getStockById };

