const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports.create = (req, res) => {
  Product.create({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    quantity: req.body.qtd
  }, (err, product) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(product);
    }
  });
};

module.exports.productList = (req, res) => {
  Product.find({}, (err, products) => {
    if (err) {
      res.status(400).json(err);
      return;
    } else {
      res.status(200).json(products);
      return;
    }
  });
};

module.exports.productReadOne = (req, res) => {
  if (req.params && req.params.productId) {
    Product.findById(req.params.productId)
      .exec((err, product) => {
        if (!product) {
          res.status(404).json({"message": "Id not found"});
          return;
        } else if (err) {
          res.status(400).json(err);
          return;
        }

        res.status(200).json(product);
      });
  } else {
    res.stauts(404).json({"message": "Id not found"});
  }
}

module.exports.productUpdateOne = (req, res) => {
  if (!req.params.productId) {
    res.status(404).json({"message": "Id not found"});
    return;
  }

  Product.findById(req.params.productId)
    .exec((err, product) => {
      if(!product) {
        res.status(404).json({"message": "Id not found"});
        return;
      } else if (err) {
        res.status(400).json(err);
        return;
      }

      product.name = req.body.name;
      product.description = req.body.description;
      product.price = req.body.price;
      product.quantity = req.body.quantity;

      product.save((err, product) => {
        if (err) {
          res.status(400).json(err);
          return;
        } else {
          res.status(200).json(product);
        }
      });
    });
}

module.exports.productDeleteOne = (req, res) => {
  const productid = req.params.productId;
  if (productid) {
    Product.findByIdAndRemove(productid, (err, product) => {
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
