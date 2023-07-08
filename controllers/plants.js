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
    if (req.body.variegation === 'on') {
        req.body.variegation = true;
    }else {
        req.body.variegation = false;
    }
    await Plant.create(req.body);
    res.redirect('/plants')
});



// export
module.exports = router;