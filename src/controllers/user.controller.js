const userServices = require('../services/user.services');

const userAuthControler = async (req, res) => {
const { statusCode, message, token } = await userServices.userAuthService(req.body);
if (message) {
  return res.status(statusCode).json({ message });
}
return res.status(statusCode).json({ token });
};

const createUserController = async (req, res) => {
  const { statusCode, token, message } = await userServices.createUserService(req.body);
  if (message) {
    return res.status(statusCode).json({ message });
  }
  return res.status(statusCode).json({ token });
};

const findAllUsers = async (_req, res) => {
  const users = await userServices.findAllUsers();
  return res.status(200).json(users);
};

module.exports = { userAuthControler, createUserController, findAllUsers };