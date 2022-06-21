const { Category } = require('../database/models');

const createCategory = async ({ name }) => {
  const newCategory = await Category.create({ name });
  if (!name) {
    return {
      statusCode: 400,
      message: '"name" is required',
    };
  }
  return {
    statusCode: 201,
    data: newCategory,
  };
};

const findAllCategory = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = { createCategory, findAllCategory };