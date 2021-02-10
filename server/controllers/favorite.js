const { readAll, readOne, create, update, deleteOne } = require('../../db/models/favorite.js');

module.exports = {
  get: (req, res) => {
    console.log('favorite_Get', req.query);
  },
  post: (req, res) => {
    console.log('favorite_Post', req.body);
  },
  put: (req, res) => {
    console.log('favorite_Put', req.body);
  },
  delete: (req, res) => {
    console.log('favorite_Delete', req.body);
  }
};
