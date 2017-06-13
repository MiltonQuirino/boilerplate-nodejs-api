const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: 'payload'
});

const ctrlProduct = require('../controllers/product.controller');
const ctrlCrudAuth = require('../controllers/crudauth');

/**
 * CRUD without authentication
 */

router.get('/product', ctrlProduct.productList);
router.get('/product/:productId', ctrlProduct.productReadOne);
router.post('/product', ctrlProduct.create);
router.put('/product/:productId', ctrlProduct.productUpdateOne);
router.delete('/product/:productId', ctrlProduct.productDeleteOne);

/**
 * CRUD with authentication
 */

router.post('/crudauth', auth, ctrlCrudAuth.crudAuthCreate);

module.exports = router;
