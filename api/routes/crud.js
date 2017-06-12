const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: 'payload'
});

const ctrlCrud = require('../controllers/crud');
const ctrlCrudAuth = require('../controllers/crudauth');

/**
 * CRUD without authentication
 */

router.get('/crud', ctrlCrud.crudList);
router.get('/crud/:crudId', ctrlCrud.crudReadOne);
router.post('/crud', ctrlCrud.create);
router.put('/crud/:crudId', ctrlCrud.crudUpdateOne);
router.delete('/crud/:crudId', ctrlCrud.crudDeleteOne);

/**
 * CRUD with authentication
 */

router.post('/crudauth', auth, ctrlCrudAuth.crudAuthCreate);

module.exports = router;
