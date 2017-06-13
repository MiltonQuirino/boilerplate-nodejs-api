const express = require('express');
const router = express.Router();

const ctrlProduct = require('../controllers/product.controller');
/**
 * CRUD without authentication
 */

router.get('/product', ctrlProduct.productList);
router.get('/product/:productId', ctrlProduct.productReadOne);
router.post('/product', ctrlProduct.create);
router.put('/product/:productId', ctrlProduct.productUpdateOne);
router.delete('/product/:productId', ctrlProduct.productDeleteOne);

module.exports = router;
