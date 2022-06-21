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
    token: token({ email }),
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
    token: token({ email, displayName }),
    data: newUser,
  };
};
module.exports = { userAuthService, createUserService };