var mongoose = require('mongoose');
var db = require('../../db');
const table = 'Favorites';

console.log(`connected to collection : "${table}"!`);

var fSchema = mongoose.Schema({
});

var Favorites = mongoose.model('Favorites', fSchema);

const dbMethods = {
  readAll: ()=>{
    return Favorites.find().sort('date : 1').limit(20).exec();
  },
  readOne: ( id )=>{
    return Favorites.findOne({ favoriteId: id }).exec();
  },
  create: ( one ) => {
    return Favorites.create({

    });
  },
  update: ( one )=>{
    return Favorites.updateMany(
      {

      },
      {

      },
      {
        upsert: true
      });
  },
  deleteOne: ( id )=>{
    return Favorites.deleteOne( { favoriteId: id });
  },
};

module.exports = dbMethods;