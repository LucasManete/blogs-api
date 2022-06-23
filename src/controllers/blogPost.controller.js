const findAllBlogPostServices = require('../services/blogPost.services');

const getAllBlogPost = async (_req, res) => {
  const result = await findAllBlogPostServices.getAllBlogPost();
  return res.status(200).json(result);
};

module.exports = { getAllBlogPost };