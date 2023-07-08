// import dependencies
const express = require('express');
const Plant = require('../models/plant');

const router = express.Router();

// ROUTES
router.get('/', (req, res) => {
    res.send('Hello World')
});

router.get('/plants', async (req, res) => {
    const allPlants = await Plant.find({});
    res.render('index.ejs', {plants: allPlants})
});

router.get('/plants/new', (req, res) => {
    res.render('new.ejs')
});





// export
module.exports = router;