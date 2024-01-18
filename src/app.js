const express = require('express');
const mongoose = require('mongoose');
const { PORT } = require('./config/env');
const productRoutes = require('./routes/productRoutes');
const stockRoutes = require('./routes/stockRoutes');
const connectDB = require('./database');

connectDB();

const app = express();

app.use(express.json());

// Intégration des routes
app.use('/products', productRoutes);
app.use('/stocks', stockRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
