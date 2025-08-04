const express = require('express');
const path = require('path');

const router = express.Router();

const productsController = require('../controllers/products.js');

router.get('/add-product', productsController.getAddProduct); 

router.post('/product', productsController.postAddProduct);

module.exports = router;

 // Exporting products array to be used in other files
