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

router.post('/plants', async (req, res) => {
    if (req.body.variegation && req.body.rare === 'on') {
        req.body.variegation = true;
        req.body.rare = true;
    }else {
        req.body.variegation = false;
        req.body.rare = false;
    }
    await Plant.create(req.body);
    res.redirect('/plants')
});

router.get('/plants/:id', async (req, res) => {
    const foundPlant = await Plant.findById(req.params.id);
    res.render('show.ejs', {plant: foundPlant});
});

// export
module.exports = router;