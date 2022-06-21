const categoriesServices = require('../services/categories.services');

const createCategory = async (req, res) => {
  const { statusCode, message, data } = await categoriesServices.createCategory(req.body);
  if (message) {
    return res.status(statusCode).json({ message });
  }
  return res.status(statusCode).json(data);
};

const findAllCategoryController = async (_req, res) => {
  const users = await categoriesServices.findAllCategory();
  return res.status(200).json(users);
};

module.exports = { createCategory, findAllCategoryController };