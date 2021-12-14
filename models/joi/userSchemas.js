const Joi = require('@hapi/joi');

module.exports.createUserSchema = Joi.object({
    name: Joi.string().alphanum().min(3).max(20).required(),
    job: Joi.string().alphanum().min(5).max(50).required(),
    birthday: Joi.date().min(1/1/2000),
    username: Joi.string().alphanum().min(3).max(20),
    mail: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    //password: Joi.password().required(),
    // repeat_password: 
});