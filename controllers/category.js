const Category = require('../models/categorySchema');

// Create a new category
exports.createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = new Category({ name });
    const savedCategory = await category.save();
    res.status(201).json(savedCategory);
  } catch (error) {
    res.status(500).json({ error: 'Could not create the category' });
  }
};

// Get all categories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch categories' });
  }
};

// Delete a category by ID from the request body
exports.deleteCategory = async (req, res) => {
  try {
    const { categoryId } = req.body;
    const deletedCategory = await Category.findByIdAndRemove(categoryId);
    
    if (!deletedCategory) {
      return res.status(404).json({ error: 'Category not found' });
    }
    
    res.status(200).json(deletedCategory);
  } catch (error) {
    res.status(500).json({ error: 'Could not delete the category' });
  }
};
