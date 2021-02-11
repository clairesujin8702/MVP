const express = require('express');
const path = require('path');
const router = require('./routers/appRouter');
const database = require('../db/');
const { searchPlace } = require('./lib/searchPlace.js');

const app = express();

app.use( express.json() );
app.use( express.urlencoded( { extended: true } ));
app.use( express.static( path.join( __dirname, './../client/dist' )));

app.use('/main', router);
app.get('/search', (req, res)=>{
  console.log('GET_req.query', req.query.term);
  let placeName = req.query.term;
  let area = req.query.location || 'New York';
  let num = req.query.limit || 10;
  let sort = req.query.sortBy || 'best_match';
  let priceLevel = req.query.price || '1,2,3,4';

  searchPlace( placeName, area, num, sort, priceLevel )
    .then(result =>{
      res.json( result );
    } )
    .catch(err => console.log(err) );
});

module.exports = app;


