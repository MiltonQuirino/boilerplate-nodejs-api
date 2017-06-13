const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  price: Number,
  quatity: Number,
  created_at: {
    type: Date,
    default: Date.now()
  }
}); 

mongoose.model('Product', productSchema);
