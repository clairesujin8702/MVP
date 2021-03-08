var mongoose = require('mongoose');
var db = require('../../db');
const table = 'Payments';

console.log(`connected to collection : "${table}"!`);

var pSchema = mongoose.Schema({
});

var Payments = mongoose.model('Payments', pSchema);

const dbMethods = {
  readAll: ()=>{
    return Payments.find().sort('date : 1').limit(20).exec();
  },
  readOne: ( id )=>{
    return Payments.findOne({ paymentsId: id }).exec();
  },
  create: ( one ) => {
    return Payments.create({

    });
  },
  update: ( one )=>{
    return Payments.updateMany(
      {

      },
      {

      },
      {
        upsert: true
      });
  },
  deleteOne: ( id )=>{
    return Payments.deleteOne( { paymentsId: id });
  },
};

module.exports = dbMethods;