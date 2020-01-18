const Joi = require('@hapi/joi');

module.exports.signupSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
});

module.exports.logiSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
});