const jwt = require('jsonwebtoken');
const findAllBlogPostServices = require('../services/blogPost.services');

const SECRET = process.env.JWT_SECRET;

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
  return res.status(statusCode).json(data);
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const token = req.headers.authorization;
  const decode = jwt.verify(token, SECRET);
  const { statusCode, data, message } = await findAllBlogPostServices
  .updatPost({ id, title, content, userId: decode.id });
  if (statusCode === 401) {
    return res.status(statusCode).json({ message });
  }
  if (statusCode === 400) {
    return res.status(statusCode).json({ message });
  }
  return res.status(200).json(data);
};

module.exports = { getAllBlogPost, getByPkBlogPost, updatePost };