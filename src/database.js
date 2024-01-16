const mongoose = require('mongoose');
const { MONGODB_URI } = require('./env');

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });