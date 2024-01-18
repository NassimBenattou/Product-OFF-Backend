const mongoose = require('mongoose');
const { MONGODB_URI } = require('./config/env');
const connectDB = async () => {
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
};

module.exports = connectDB;