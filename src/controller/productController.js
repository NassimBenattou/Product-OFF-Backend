const productService = require('../services/productService');

const addProduct = async (req, res) => {
    try {
        const result = await productService.addProduct(req.body._id, req.body.name, req.body.ingredients, req.body.image, req.body.stockId, req.body.quantity);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    } 
};

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

module.exports = { addProduct, addProductToStock, getStockById };