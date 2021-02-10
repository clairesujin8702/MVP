const { readAll, readOne, create, update, deleteOne } = require('../../db/models/wishList.js');

module.exports = {
  get: (req, res) => {
    console.log('wishList_Get', req.query);
  },
  post: (req, res) => {
    console.log('wishList_Post', req.body);
  },
  put: (req, res) => {
    console.log('wishList_Put', req.body);
  },
  delete: (req, res) => {
    console.log('wishList_Delete', req.body);
  }
};