const mongoose = require('mongoose');
const { Schema } = mongoose;

const comicSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  author: { 
    type: String,
    required: true,
    trim: true
  },
  publisher: {
    type: String,
    required: true,
    trim: true
  },
  genre: { 
    type: String,
    trim: true 
  },
  pages: {
    type: Number
  },
  rating: {
    type: Number
  },
  synopsis: {
    type: String,
    trim: true
  },
  image: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

const Comic = mongoose.model('Comic', comicSchema);

module.exports = Comic;


