const { User } = require('../database/models');
const { token } = require('../helpers/AuthToken');

const userAuthService = async ({ email, password }) => {
  if (!email || !password) {
    return {
      statusCode: 400,
      message: 'Some required fields are missing', 
    };
  }
  const newUser = await User.findOne({ where: { email, password } });
  if (!newUser) {
    return {
      statusCode: 400,
      message: 'Invalid fields',
    };
  }
  return {
    statusCode: 200,
    token: token({ email, id: newUser.id }),
  };
};
const createUserService = async ({ displayName, email, password, image }) => {
  const verifyEmail = await User.findOne({ where: { email } });
  if (verifyEmail) {
    return {
      statusCode: 409,
      message: 'User already registered',
    };
  }
  const newUser = await User.create({ displayName, email, password, image });
  return {
    statusCode: 201,
    token: token({ email }),
    data: newUser,
  };
};

const findAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: 'password' } });
  return users;
};

const findById = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: 'password' } });
  if (!user) {
    return {
      statusCode: 404,
      message: 'User does not exist',
    };
  }
  return {
    statusCode: 200,
    users: user,
  };
};

module.exports = { userAuthService, createUserService, findAllUsers, findById };