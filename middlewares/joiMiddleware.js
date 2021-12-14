const Joi = require('@hapi/joi');
const c = require('../constants/constants');

module.exports.validate = (schema, inputValidation) => {
    return (req, res, next) => {
        let objToValidate = {};
        // if (inputValidation === 'body'){
        //     objToValidate = req.body;
        // }else if (inputValidation === 'params'){
        //     objToValidate = req.params;
        // } else if (inputValidation === 'query'){
        //     objToValidate = req.query;
        // }

        switch (inputValidation){
            case 'body':
            objToValidate = req.body;
            break;
            case 'params':
            objToValidate = req.params; 
            break;
            case 'query':
            objToValidate = req.query;
            break;
            default:
            objToValidate = {};
        }

        const result = schema.validate(objToValidate);
        if(result.error){
            console.log(result.error);
            const errorDetails = result.error.details.map((error) => error.message);
            res.status(c.status.badReq).send({title: 'ERROR input', errorDetails});
        }else{
            next();
        }
    };
};