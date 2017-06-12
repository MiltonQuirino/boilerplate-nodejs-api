const mongoose = require('mongoose');

const crudSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  qtd: {
    type: Number,
    "default": 0,
    min: 0,
    max: 10
  }
});

mongoose.model('Crud', crudSchema);
