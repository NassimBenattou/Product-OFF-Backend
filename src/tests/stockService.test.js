const { addStock, getStocks } = require('../services/stockService');
const mongoose = require('mongoose');

describe('stockService test', () => {

    beforeAll(async () => {
        await mongoose.connect('mongodb://localhost:27017/Product_OFF_test', { useNewUrlParser: true, useUnifiedTopology: true });
    });

    afterAll(async () => {
        await mongoose.disconnect();
    });

    test('getStocks renvoie les stocks', async () => {

        // Appel de la fonction getStocks pour récupérer les stocks
        const stocks = await getStocks();

        // Vérifie que le résultat est un tableau
        expect(Array.isArray(stocks)).toBeTruthy();

    });

    test('Ajoute un nouveau stock', async () => {

        // Création des données de stock à ajouter
        const stockData = { name: 'AddNewStock' };

        // Appel de la fonction addStock
        const stock = await addStock(stockData);

        // Vérifie que le stock ajouté possède bien la propriété 'name' avec la valeur 'AddNewStock'
        expect(stock).toHaveProperty('name', 'AddNewStock');

    });

});
