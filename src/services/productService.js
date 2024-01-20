const Stock = require('../models/Stock');
const Product = require('../models/Product');

const addProduct = async(productName, productIngredient, productImg, productStock, quantity) => {
    try {
        const stock = await Stock.findOne({ _id: productStock });

        if (!stock) {
            console.log(`Stock not found for name: ${productStock}`);
            throw new Error("Stock not found");
        }

        const newProduct = new Product({
            name: productName,
            ingredients: productIngredient,
            image: productImg,
            quantity: quantity,
            stockId: stock._id,
        });

        console.log('New Product:', newProduct);

        await newProduct.save();

        stock.products.push({
            name: newProduct.name,
            ingredients: newProduct.ingredients,
            image: newProduct.image,
            quantity: newProduct.quantity,
            productId: newProduct._id
        });

        await stock.save();

        console.log('Product added successfully');

        return newProduct;
    } catch (error) {
        throw new Error(`Error adding product: ${error.message}`);
    }
}

const addProductToStock = async (productId, stockId) => {

    // Recherche du produit par son ID
    const product = await Product.findById(productId);

    // Recherche du stock par son ID
    const stock = await Stock.findById(stockId);

    // Vérifie si le produit et le stock existent
    if (!product || !stock) {
        throw new Error("Product or Stock not found");
    }

    // Ajoute l'ID du produit au stock
    stock.products.push(product._id);

    await stock.save();
    return stock;
};

const getStockById = async (stockId) => {
    // Retourne le stock par son ID et ajoute les détails des produits associés
    return await Stock.findById(stockId);
};

module.exports = { addProduct, addProductToStock, getStockById };

