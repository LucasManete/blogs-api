const findAllBlogPostServices = require('../services/blogPost.services');

const getAllBlogPost = async (_req, res) => {
  const result = await findAllBlogPostServices.getAllBlogPost();
  return res.status(200).json(result);
};

const getByPkBlogPost = async (req, res) => {
  const { id } = req.params;
  const { statusCode, data, message } = await findAllBlogPostServices.getPkBlogPost(id);
  if (message) {
    return res.status(statusCode).json({ message });
  }
  return res.status(200).json(data);
};

module.exports = { getAllBlogPost, getByPkBlogPost };