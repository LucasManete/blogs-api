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

const getPkBlogPost = async (id) => {
  const findBlogByPk = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  if (!findBlogByPk) {
    return {
      statusCode: 404,
      message: 'Post does not exist',
    };
  }
  return {
    statusCode: 200,
    data: findBlogByPk,
  };
};

module.exports = {
  getAllBlogPost, getPkBlogPost,
};