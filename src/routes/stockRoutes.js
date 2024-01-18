const express = require('express');
const router = express.Router();
const stockController = require('../controller/stockController');

// Define the GET route for stocks
router.get('/', stockController.getStockList);

// Define the POST route for create new stocks
router.post('/', stockController.createStock);

module.exports = router;

