const express = require('express');
const router = express.Router();
const stockController = require('../controller/stockController');

// Define the GET route for stocks
router.get('/', stockController.getStockList);

router.post('/', stockController.createStock);

module.exports = router;

