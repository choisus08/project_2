// import dependencies
const express = require('express');
const Plant = require('../models/plant');

const router = express.Router();

// ROUTES
router.get('/', async (req, res) => {
    const allPlants = await Plant.find({username: req.session.username});
    res.render('plants/index.ejs', {plants: allPlants, user: req.session.username});
});

router.get('/new', (req, res) => {
    res.render('plants/new.ejs')
});

router.post('/', async (req, res) => {
    req.body.variegation = req.body.variegation === 'on'? true : false;
    req.body.rare = req.body.rare === 'on'? true : false;
    req.body.username = req.session.username
    await Plant.create(req.body);
    res.redirect('/plants')
});

router.get('/:id', async (req, res) => {
    const foundPlant = await Plant.findById(req.params.id);
    res.render('plants/show.ejs', {plant: foundPlant});
});

router.delete('/:id', async (req, res) => {
    await Plant.findByIdAndDelete(req.params.id);
    res.redirect('/plants');
});

router.get('/:id/edit', async (req, res) => {
    const plant = await Plant.findById(req.params.id);
    res.render('edit.ejs', {plant});
});

router.put('/:id', async (req, res) => {
    req.body.variegation = req.body.variegation === 'on'? true : false;
    req.body.rare = req.body.rare === 'on'? true : false;
    await Plant.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/plants')
});

// export
module.exports = router;