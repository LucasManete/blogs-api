const categoriesServices = require('../services/categories.services');

const createCategory = async (req, res) => {
  const { statusCode, message, data } = await categoriesServices.createCategory(req.body);
  if (message) {
    return res.status(statusCode).json({ message });
  }
  return res.status(statusCode).json(data);
};

module.exports = { createCategory };