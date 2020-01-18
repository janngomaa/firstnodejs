const constants = require('../constants');
const jwt = require('jsonwebtoken');

module.exports.validateToken = (req, res, next) => {
    let response = {...constants.defaultServerResponse};
    
    try{
        if(!req.headers.authorization){
            throw new Error(constants.validationMessage.TOKEN_MISSING);
        }
        const token = req.headers.authorization.trim();
        const decode = jwt.verify(token, process.env.TOKEN_SECRET_KEY || 'default_secret_key');
        return next();
    }catch(error){
        console.log('Token validation error: ', error);
        response.message = error.message;
        response.status = constants.serverStatus.SERVER_UNAUTORIZED_ACCESS;
    }

    return res.status(response.status).send(response);

}