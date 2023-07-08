// import connection file
const { boolean } = require('webidl-conversions');
const mongoose = require('./connection');

// schema
const plantSchema = new mongoose.Schema({
    name: String,
    dateAcquired: Number,
    watered: Number,
    fertilized: Number,
    variegation: Boolean,
    rare: Boolean,
    notes: String
});

// pass model into db
const Plant = mongoose.model('plant', plantSchema);

// export
module.exports = Plant;