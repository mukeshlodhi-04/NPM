const mongoose = require('mongoose');

const templeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true },
  history: { type: String, required: true },
  state: { type: String, enum: ['MP', 'Gujarat','Maharashtra'], required: true },
});

module.exports = mongoose.model('Temple', templeSchema);