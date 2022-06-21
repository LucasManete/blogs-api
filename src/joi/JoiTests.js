const joi = require('joi');

const shema = joi.object({
  displayName: joi.string().min(8).required(),
  email: joi.string().email({ tlds: { allow: false } }).required(),
  password: joi.string().min(6).required(),
  image: joi.string(),
}).messages({
  'any.': '{{#label}} is required',
  'any.l': '{{#label}} length must be at least 8 characters long',
  'email.': '{{#label}} must be a valid email',
  'password.': '{{#label}} length must be at least 6 characters long',
});

module.exports = shema;