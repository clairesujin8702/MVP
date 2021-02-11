var mongoose = require('mongoose');
var db = require('../../db');
const table = 'Favorites';

console.log(`connected to collection : "${table}"!`);

var fSchema = mongoose.Schema({
  id: { type: String, unique: true },
  name: String,
  image_url: String,
  is_closed: { type: Boolean, default: false },
  url: String,
  review_count: Number,
  categories: [],
  rating: Number,
  coordinates: { latitude: { type: Number }, longitude: { type: Number } },
  price: String,
  location: { display_address: [] },
  display_phone: String,
  distance: Number,
  date: { type: Date, default: Date.now },
  comment: String
});

var Favorites = mongoose.model('Favorites', fSchema);

const dbMethods = {
  readAll: () => {
    return Favorites.find().sort('date : 1').limit(20).exec();
  },
  readOne: (id) => {
    return Favorites.findOne({ favoriteId: id }).exec();
  },
  create: (one) => {
    return Favorites.create({
      id: one.id,
      name: one.name,
      image_url: one.image_url,
      is_closed: one.is_closed,
      url: one.url,
      review_count: one.review_count,
      categories: one.categories,
      rating: one.rating,
      coordinates: one.coordinates,
      price: one.price,
      location: one.location,
      display_phone: one.display_phone,
      distance: one.distance,
      comment: one.comment
    });
  },
  update: (one) => {
    // return Favorites.updateMany(
      // {
      //   id: one.id
      // },
      // {
      //   id: one.id,
      //   name: one.name,
      //   image_url: one.image_url,
      //   is_closed: one.is_closed,
      //   url: one.url,
      //   review_count: onereview_count,
      //   categories: one.categories,
      //   rating: one.rating,
      //   coordinates: one.coordinates,
      //   price: one.price,
      //   location: one.location,
      //   display_phone: one.display_phone,
      //   distance: one.distance
      // },
      // {
      //   upsert: true
      // });
  },
  deleteOne: (id) => {
    return Favorites.deleteOne({ id: id });
  },
};

module.exports = dbMethods;