const schema = require('../joi/JoiTests');

const validateUser = (req, res, next) => {
  const { error } = schema.validate(req.body);
  const { displayName, email, password } = req.body;
  const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  if (displayName.length < 8 || password.length < 6) {
    const erros = error.message;
    return res.status(400).json({ message: erros });
  }
  if (!emailRegex.test(email)) {
    const erros = error.message;
    return res.status(400).json({ message: erros });
  }
  next();
};

module.exports = validateUser;