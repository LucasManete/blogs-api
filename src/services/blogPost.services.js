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

const updatPost = async ({ id, title, content, userId }) => {
 const getByPk = await BlogPost.findByPk(id);
 if (getByPk.userId !== userId) {
   return { statusCode: 401, message: 'Unauthorized user' };
 }
 if (!title || !content) {
  return { statusCode: 400, message: 'Some required fields are missing' };
 }
  await BlogPost.update({ title, content }, { where: { id } });
  const findBlogByPk = await BlogPost.findByPk(id, {
    include: [
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
 return {
  data: findBlogByPk,
 };
};

module.exports = {
  getAllBlogPost, getPkBlogPost, updatPost,
};