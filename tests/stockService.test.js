
const { addStock } = require('../src/services/stockService');

describe('addStock', () => {
    test('ajoute un stock valide', async () => {
        const stockData = { id: 3, name: 'Stock C' };
        const result = await addStock(stockData);
        expect(result).toEqual(stockData);
    });

    test('échoue si le stock est sans id ou nom', async () => {
        await expect(addStock({ name: 'Stock Invalide' })).rejects.toThrow();
        await expect(addStock({ id: 4 })).rejects.toThrow();
    });

    test('échoue si le stock a un ID déjà existant', async () => {
        const stockData = { id: 1, name: 'Stock Existant' };
        await expect(addStock(stockData)).rejects.toThrow();
    });
});
