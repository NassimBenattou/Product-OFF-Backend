const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

// Define the GET route for add product to Stock
router.post('/:productId/stock/:stockId', productController.addProductToStock);

// Define the GET route for a stockId with detail product
router.get('/:stockId', productController.getStockById);

module.exports = router;
