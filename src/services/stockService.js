let sampleStocks = [
    { id: 1, name: 'Stock A'},
    { id: 2, name: 'Stock B'}
];

const getStocks = async () => {
    // Remplacer par une requête à la base de données
    return sampleStocks;
};

const addStock = async (stockData) => {
    if (process.env.USE_DB === 'true') {
        // Connexion à la base de données

        // const savedStock = await db.collection('stocks').insertOne(stockData);
        // return savedStock;
        
    } else {
        
        // Validation des données
        if (!stockData.id || !stockData.name) {
            throw new Error("Missing required fields: id and name");
        }

        // Vérifier si un stock avec le même ID existe déjà
        if (sampleStocks.some(stock => stock.id === stockData.id)) {
            throw new Error("Stock with this ID already exists");
        }

        // Ajouter le stock à la liste en mémoire
        sampleStocks.push(stockData);
        return stockData;
    }
};

module.exports = { getStocks, addStock };