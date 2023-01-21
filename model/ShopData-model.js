const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  id: Number,
  name: String,
  imageUrl: String,
  price: Number
});

const categorySchema = new mongoose.Schema({
  id: Number,
  title: String,
  routeName: String,
  items: [itemSchema]
});

const shopData = mongoose.model('shopdata', categorySchema);

module.exports = shopData