// import connection file
const mongoose = require('./connection');

// schema
const plantSchema = new mongoose.Schema({
    name: String,
    dateAcquired: String,
    watered: String,
    fertilized: String,
    variegation: Boolean,
    rare: Boolean,
    notes: String,
    username: String
});

// pass model into db
const Plant = mongoose.model('plant', plantSchema);

// export
module.exports = Plant;