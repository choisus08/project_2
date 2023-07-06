// Import dependencies
require('dotenv').config();
const mongoose = require('mongoose');

// get DATABASE_URL 
const DATABASE_URL = process.env.DATABASE_URL;

// connect to mongodb
mongoose.connect(DATABASE_URL)

mongoose.connection
    .on('open', () => console.log('connected to Mongo'))
    .on('close', () => console.log('disconnected from Mongo'))
    .on('error', (error) => console.log(error));


// export the connection
module.exports = mongoose;