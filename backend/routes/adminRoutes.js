// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const {
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getAllProducts,
} = require('../controllers/adminController');

// Create a new product
router.post('/products', createProduct);

// Update a product by ID
router.put('/products/:id', updateProduct);

// Delete a product by ID
router.delete('/products/:id', deleteProduct);

// Get a product by ID
router.get('/products/:id', getProduct);

// Get all products
router.get('/products', getAllProducts);

module.exports = router;
