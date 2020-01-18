const Joi = require('@hapi/joi');
const constants = require('../constants');

const validateObjectSchema = (data, schema)=>{
    const result = schema.validate(data, {convert: false});
    if(result.error){
        const errdet = result.error.details[0];
        return {
            message: errdet.message,
            path: errdet.path
        }
    }

    return null;
}

/*
 * *** Validate request body data 
*/
module.exports.validateBody = (schema)=>{
    return (req, res, next)=>{
        let response = {...constants.defaultServerResponse};
        const error = validateObjectSchema(req.body, schema);
        if(error){
            response.body = error.message;
            response.message = constants.validationMessage.BAD_REQUEST_MESSAGE;
            response.status = constants.serverStatus.SERVER_BAD_REQUEST_STATUS;
            return res.status(response.status).send(response);
        }

        return next();
    }
}

/*
 * *** Validate request params
*/
module.exports.validateRequestParams = (schema)=>{
    return (req, res, next)=>{
        let response = {...constants.defaultServerResponse};
        const error = validateObjectSchema(req.query, schema);
        if(error){
            response.body = error.message;
            response.message = constants.validationMessage.BAD_REQUEST_MESSAGE;
            response.status = constants.serverStatus.SERVER_BAD_REQUEST_STATUS;
            return res.status(response.status).send(response);
        }

        return next();
    }
}

