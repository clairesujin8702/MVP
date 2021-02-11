const { readAll, readOne, create, update, deleteOne } = require('../../db/models/wishList.js');

module.exports = {
  get: (req, res) => {
    console.log('wishList_Get');
    readAll()
      .then(result => res.json(result))
      .catch(err => {
        res.sendStatus(404);
        console.log(err);
      });
  },
  post: (req, res) => {
    console.log('wishList_Post', req.body);
    create(req.body)
      .then(result => res.send(result))
      .catch(err => {
        res.sendStatus(404);
        console.log(err);
      });
  },
  put: (req, res) => {
    console.log('wishList_Put', req.body);
  },
  delete: (req, res) => {
    console.log('wishList_Delete', req.params.id);
    deleteOne(req.params.id)
      .then(result => res.send(result))
      .catch(err => {
        res.sendStatus(404);
        console.log(err);
      });
  }
};