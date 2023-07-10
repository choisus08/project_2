// Import dependencies
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const Plant = require('./models/plant');
const plantRouter = require('./controllers/plants');
const userRouter = require('./controllers/user');
const { urlencoded } = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');


// express application
const app = express();

// Middleware
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: false}));
// app.use(plantRouter);
app.use(express.json());
app.use(session({
    secret: process.env.SECRET,
    store: MongoStore.create({mongoUrl: process.env.DATABASE_URL}),
    saveUninitialized: true,
    resave: false
}));
app.use('/plants', plantRouter);
app.use('/user', userRouter);


// Routes
app.get('/', (req, res) => {
    res.render('index.ejs')
});

// Listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)});
