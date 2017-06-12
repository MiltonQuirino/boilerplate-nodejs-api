const mongoose = require('mongoose');
const Crud = mongoose.model('Crud');

module.exports.create = (req, res) => {
  Crud.create({
    name: req.body.name,
    description: req.body.description,
    qtd: req.body.qtd
  }, (err, obj) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(obj);
    }
  });
};

module.exports.crudList = (req, res) => {
  Crud.find({}, (err, objs) => {
    if (err) {
      res.status(400).json(err);
      return;
    } else {
      res.status(200).json(objs);
      return;
    }
  });
};

module.exports.crudReadOne = (req, res) => {
  if (req.params && req.params.crudId) {
    Crud.findById(req.params.crudId)
      .exec((err, obj) => {
        if (!obj) {
          res.status(404).json({"message": "Id not found"});
          return;
        } else if (err) {
          res.status(400).json(err);
          return;
        }

        res.status(200).json(obj);
      });
  } else {
    res.stauts(404).json({"message": "Id not found"});
  }
}

module.exports.crudUpdateOne = (req, res) => {
  if (!req.params.crudId) {
    res.status(404).json({"message": "Id not found"});
    return;
  }

  Crud.findById(req.params.crudId)
    .exec((err, obj) => {
      if(!obj) {
        res.status(404).json({"message": "Id not found"});
        return;
      } else if (err) {
        res.status(400).json(err);
        return;
      }

      obj.name = req.body.name;
      obj.description = req.body.description;
      obj.qtd = req.body.qtd;

      obj.save((err, obj) => {
        if (err) {
          res.status(400).json(err);
          return;
        } else {
          res.status(200).json(obj);
        }
      });
    });
}

module.exports.crudDeleteOne = (req, res) => {
  const crudid = req.params.crudId;
  if (crudid) {
    Crud.findByIdAndRemove(crudid, (err, obj) => {
      if (err) {
        res.status(400).json(err);
        return;
      }

      res.status(204).json(null);
    });
  } else {
    res.status(404).json({"message": "Id not found"});
  }
}
