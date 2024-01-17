const getStocks = async () => {
    // Sample data, replace with actual database call
    const sampleStocks = [
        { id: 1, name: 'Stock A', price: 100 },
        { id: 2, name: 'Stock B', price: 150 }
    ];
    return sampleStocks;
};

module.exports = { getStocks };
