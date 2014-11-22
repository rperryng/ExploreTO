var mongoose = require('mongoose');

var businessSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: Number,
    required: true,
    unique: true
  },
  logo: String,
  category: String,
  latitude: Number,
  longitude: Number,
  description: String
});

module.exports = mongoose.model('Business', businessSchema);