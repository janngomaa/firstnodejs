const Joi = require('@hapi/joi');
module.exports.createProductSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    brand: Joi.string().required()
});

module.exports.getAllProductsSchema = Joi.object({
    skip: Joi.string(),
    limit: Joi.string()
});

module.exports.upateProductSchema = Joi.object({
    name: Joi.string(),
    price: Joi.number(),
    brand: Joi.string()
});