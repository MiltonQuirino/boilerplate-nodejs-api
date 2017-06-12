const mongoose = require('mongoose');
const CrudAuth = mongoose.model('CrudAuth');
const User = mongoose.model('User');

module.exports.crudAuthCreate = (req, res) => {
  getAuthor(req, res, (req, res, userName) => {
    CrudAuth.create({
      article: req.body.article,
      description: req.body.description, 
      user: userName
    }, (err, obj) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json(obj);
      }
    });
  })
  
};

const getAuthor = (req, res, callback) => {
  if (req.payload && req.payload.email) {
    User
      .findOne({ email: req.payload.email })
      .exec((err, user) => {
        if (!user) {
          res.status(404).json({"message": "User not found"});
          return;
        } else if (err) {
          res.status(400).json(err)
          return;
        }
        callback(req, res, user.name);
      });
  } else {
    res.stauts(404).json({"message": "User not found"});
    return;
  }
};