jest.setTimeout(50000)


require('../models/User');

const mongoose = require('mongoose');
const keys = require('../config/keys');

mongoose.Promise = global.Promise;

const connectDatabase = async () => {
    await mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
}

connectDatabase();
