const express = require('express');
const router = express.Router();

const ctrlCrud = require('../controllers/crud');

router.post('/crud', ctrlCrud.create);

module.exports = router;
