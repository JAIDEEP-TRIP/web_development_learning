const express = require('express');
const path = require('path');
const router = express.Router();
const productsController = require('../controllers/products.js');

const adminData = require('./admin'); // Imports products from admin.js

router.get('/', productsController.displayProducts); 
  


module.exports = router;
