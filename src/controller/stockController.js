const stockService = require('../services/stockService');

// GET request for stock list
const getStockList = async (req, res) => {
    try {
        const stocks = await stockService.getStocks();
        res.json(stocks);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching stock data' });
    }
};

// POST request add stock
const createStock = async (req, res) => {
    try {
        const newStock = await stockService.addStock(req.body);
        res.status(201).json(newStock);
    } catch (error) {
        res.status(500).json({ message: 'Error creating new stock' });
    }
};



module.exports = { getStockList, createStock };
