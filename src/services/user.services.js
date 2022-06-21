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

module.exports = { userAuthService };