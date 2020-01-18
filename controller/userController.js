const userService = require('../service/userService');
const constants = require('../constants'); 

module.exports.signup = async (req, res) => {    
    let response = {...constants.defaultServerResponse};
    try{
        const serviceResponse = await userService.signup(req.body);
        response.status = constants.serverStatus.SERVER_SUCESS_STATUS;
        response.message = constants.userMessage.SIGNUP_SUCCESS;
        response.body = serviceResponse;
        //console.log(response);

    } catch(error){
        response.status = constants.serverStatus.SERVER_ERROR_STATUS;
        response.message = error.message;
        response.body = {};
    }
    return res.status(response.status).send(response);

};

module.exports.login = async (req, res) => {    
    let response = {...constants.defaultServerResponse};
    try{
        const serviceResponse = await userService.login(req.body);
        response.status = constants.serverStatus.SERVER_SUCESS_STATUS;
        response.message = constants.userMessage.LOGIN_SUCCESS;
        response.body = serviceResponse;
        //console.log(response);

    } catch(error){
        response.status = constants.serverStatus.SERVER_ERROR_STATUS;
        response.message = error.message;
        response.body = {};
    }
    return res.status(response.status).send(response);

};

