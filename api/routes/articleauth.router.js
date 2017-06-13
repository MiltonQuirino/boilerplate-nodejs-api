const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const ctrlCrudAuth = require('../controllers/articleauth.controller');


const auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: 'payload'
});

/**
 * CRUD with authentication
 */

router.post('/articleauth', auth, ctrlCrudAuth.crudAuthCreate);

module.exports = router;