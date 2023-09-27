const express = require('express');
const router = express.Router();
const categoryController = require('../../controllers/category');

// Create a new category
router.post('/category', categoryController.createCategory);

// Get all categories
router.get('/categories', categoryController.getAllCategories);

// Delete a category by ID from the request body
router.post('/delete-category', categoryController.deleteCategory);

module.exports = router;