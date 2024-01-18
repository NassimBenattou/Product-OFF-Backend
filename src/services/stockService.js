const Stock = require('../models/Stock');

// Retourne tous les stocks de la base de données
const getStocks = async () => {
    return await Stock.find(); 
};

// Créer un nouveau stock
const addStock = async (stockData) => {
    if (!stockData.name) {
        throw new Error("Missing required field: name");
    }

    const newStock = new Stock(stockData);
    const savedStock = await newStock.save();
    return savedStock;
};

module.exports = { getStocks, addStock };
