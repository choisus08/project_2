// Import dependencies
require('dotenv').config();
const express = require('express');
const PlantRouter = require('./controllers/plants');
const UserRouter = require('./controllers/user');
const app = express();
const morgan = require('morgan');
const methodOverride = require('method-override');
// const { urlencoded } = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');


// Middleware
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
// app.use(express.json());
app.use(session({
    secret: process.env.SECRET,
    store: MongoStore.create({mongoUrl: process.env.DATABASE_URL}),
    saveUninitialized: true,
    resave: false
}));
app.use('/plants', PlantRouter);
app.use('/user', UserRouter);


// index route
app.get('/', (req, res) => {
    res.render('index.ejs')
});

// Listen
const PORT = process.env.PORT;
app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)});
