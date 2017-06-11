const mongoose = require('mongoose');
const Crud = mongoose.model('Crud');

module.exports.create = (req, res) => {
  Crud.create({
    name: req.body.name,
    address: req.body.address,
    rating: req.body.rating
  }, (err, crud) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(crud);
    }
  });
};
