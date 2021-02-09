var mongoose = require('mongoose');
var db = require('../../db');
const table = 'WishLists';

console.log(`connected to collection : "${table}"!`);

var wSchema = mongoose.Schema({
});

var WishLists = mongoose.model('WishLists', wSchema);

const dbMethods = {
  readAll: ()=>{
    return WishLists.find().sort('date : 1').limit(20).exec();
  },
  readOne: ( id )=>{
    return WishLists.findOne({ wishListId: id }).exec();
  },
  create: ( one ) => {
    return WishLists.create({

    });
  },
  update: ( one )=>{
    return WishLists.updateMany(
      {

      },
      {

      },
      {
        upsert: true
      });
  },
  deleteOne: ( id )=>{
    return WishLists.deleteOne( { wishListId: id });
  },
};

module.exports = dbMethods;