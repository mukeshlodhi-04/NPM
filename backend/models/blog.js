// const mongoose = require('mongoose');
// 
// const blogSchema = new mongoose.Schema({
  // title: { type: String, required: true },
  // content: { type: String, required: true },
  // author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  // createdAt: { type: Date, default: Date.now },
// });
// 
// module.exports = mongoose.model('Blog', blogSchema);

const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }, // This will store the filename
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Blog', blogSchema);