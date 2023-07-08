// Import dependencies
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const Plant = require('./models/plant');
const plantRouter = require('./controllers/plants');
const { urlencoded } = require('body-parser');


// express application
const app = express();

// Middleware
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: false}));
app.use(plantRouter);
app.use(express.json());


// Routes
// app.get('/', (req, res) => {
//     res.send('Hello World!')
// });

// Listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)});
