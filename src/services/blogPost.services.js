const { BlogPost, User, Category } = require('../database/models');

const getAllBlogPost = async () => {
  const findBlog = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return findBlog;
};

module.exports = {
  getAllBlogPost,
};