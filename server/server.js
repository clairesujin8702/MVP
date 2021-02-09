const express = require('express');
const path = require('path');
const router = require('./routers/appRouter');
// const database = require('../db/');
const app = express();

app.use( express.json() );
app.use( express.urlencoded( { extended: true } ));
app.use( express.static( path.join( __dirname, './../client/dist' )));

app.use('/main', router);
module.exports = app;
