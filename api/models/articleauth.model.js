const mongoose = require('mongoose');

const articleAuthSchema = new mongoose.Schema({
  article: {
    type: String,
    required: true
  },
  description: String,
  user: {
    type: String,
    required: true
  }
});

mongoose.model('ArticleAuth', articleAuthSchema);
