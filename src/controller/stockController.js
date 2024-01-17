const stockService = require('../services/stockService');

// Controller function to handle GET request for stock list
const getStockList = async (req, res) => {
    try {
        const stocks = await stockService.getStocks();
        res.json(stocks);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching stock data' });
    }
};

module.exports = { getStockList };
