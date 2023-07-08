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
    req.body.variegation = req.body.variegation === 'on'? true : false;
    req.body.rare = req.body.rare === 'on'? true : false;
    await Plant.create(req.body);
    res.redirect('/plants')
});

router.get('/plants/:id', async (req, res) => {
    const foundPlant = await Plant.findById(req.params.id);
    res.render('show.ejs', {plant: foundPlant});
});

router.delete('/plants/:id', async (req, res) => {
    await Plant.findByIdAndDelete(req.params.id);
    res.redirect('/plants');
});

router.get('/plants/:id/edit', async (req, res) => {
    const plant = await Plant.findById(req.params.id);
    res.render('edit.ejs', {plant});
});

router.put('/plants/:id', async (req, res) => {
    req.body.variegation = req.body.variegation === 'on'? true : false;
    req.body.rare = req.body.rare === 'on'? true : false;
    await Plant.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/plants')
});

// export
module.exports = router;