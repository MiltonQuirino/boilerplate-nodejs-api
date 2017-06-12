const mongoose = require('mongoose');

const crudAuthSchema = new mongoose.Schema({
  article: {
    type: String,
    required: true
  },
  description: String,
  user: String
});

mongoose.model('CrudAuth', crudAuthSchema);
