const express = require('express');
const app = express();
const morgan = require('morgan');
const dotenv = require('dotenv').config({path: './.env'});
const sequelize = require('./config/DBconfig').sequelize;
const session = require('express-session');
const passport = require('passport');


//CONNECT TO DATABASE
sequelize.authenticate()
    .then(() => {
        console.log('Connect DB successfully!');
    })
    .catch((err) => {
        console.log(err);
    })

//[Global Middleware]

//PARSE AND READ BODY
app.use(express.json());
//DEV LOGGING
app.use(morgan('dev'));
//CREATE NEW SESSION
app.use(session({ secret: process.env.SESSION_SECRET }));
//INIT PASSPORT JS
app.use(passport.initialize());
app.use(passport.session());


app.get('/', (req, res) => {
    res.send('HOME PAGE');
})


//import Router
require('./Route/index')(app);

//SYNC DATABASE
sequelize.sync()
    .then(() => {
        console.log('Sync done!');
    })
    .catch((err) =>{
        console.log(err);
    })

    
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App is listening at port ${PORT}`);
})
