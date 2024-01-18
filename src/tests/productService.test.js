const mongoose = require('mongoose');
const { addProductToStock, getStockById } = require('../services/productService');
const Product = require('../models/Product');
const Stock = require('../models/Stock');

describe('productService test', () => {

    beforeAll(async () => {
        await mongoose.connect('mongodb://localhost:27017/Product_OFF_test', { useNewUrlParser: true, useUnifiedTopology: true });
    });

    afterAll(async () => {
        await mongoose.disconnect();
    });
    
    test('ajoute un produit à un stock existant', async () => {
        
        // Création d'un produit de test dans la base de données
        const product = new Product({ name: 'New Product', price: 69 });
        await product.save();
        
        // Création d'un stock de test dans la base de données
        const stock = new Stock({ name: 'New Stock'});
        await stock.save();
    
        // Appel de la fonction addProductToStock       
        const updatedStock = await addProductToStock(product._id, stock._id);

        //Test de la fonction Add product to stock        
        expect(updatedStock.products).toContainEqual(product._id);
    });

    test('getStockById returns a stock with populated products', async () => {

        // Création d'un produit de test dans la base de données
        const product = new Product({ name: 'Detail Product', price: 34 });
        await product.save();

        // Création d'un stock de test dans la base de données
        const stock = new Stock({ name: 'Detail Stock', products: [product._id] });
        await stock.save();

        // Appel de la fonction getStockById
        const foundStock = await getStockById(stock._id);

        // Test de la fonction getStockById et que le stock est renvoyé avec les détailles du produits
        expect(foundStock).toHaveProperty('_id');
        expect(foundStock.products).toHaveLength(1);
        expect(foundStock.products[0]).toHaveProperty('_id', product._id);
        expect(foundStock.products[0]).toHaveProperty('name', 'Detail Product');
        expect(foundStock.products[0]).toHaveProperty('price', 34);
    });

});
