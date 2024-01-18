const productService = require('../services/productService');

// Ajouter un produit a un stock 
const addProductToStock = async (req, res) => {
    try {
        const { productId, stockId } = req.params;
        const result = await productService.addProductToStock(productId, stockId);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
};

// GET request pour un stock avec les détailles d'un produit 
const getStockById = async (req, res) => {
    try {
        const stockId = req.params.stockId;
        const stock = await productService.getStockById(stockId);
        res.json(stock);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = { addProductToStock, getStockById };