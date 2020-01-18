const productService = require('../service/productService');
const constants = require('../constants'); //Not required to specify the index file

module.exports.createProduct = async (req, res) => {    
    let response = {...constants.defaultServerResponse};
    try{
        const serviceResponse = await productService.createProduct(req.body);
        response.status = constants.serverStatus.SERVER_SUCESS_STATUS;
        response.message = constants.productMessage.PRODUCT_CREATED;
        response.body = serviceResponse;
        //console.log(response);

    } catch(error){
        response.status = constants.serverStatus.SERVER_ERROR_STATUS;
        response.message = error.message;
        response.body = {};
    }
    return res.status(response.status).send(response);

};


module.exports.getAllProducts = async (req, res) => {    
    let response = {...constants.defaultServerResponse};
    try{
        const serviceResponse = await productService.getAllProducts(req.query);
        response.status = constants.serverStatus.SERVER_SUCESS_STATUS;
        response.message = constants.productMessage.PRODUCTS_FETCHED;
        response.body = serviceResponse;
        //console.log(response);

    } catch(error){
        response.status = constants.serverStatus.SERVER_ERROR_STATUS;
        response.message = error.message;
        response.body = {};
    }
    return res.status(response.status).send(response);

};

module.exports.getProductById = async (req, res) => {    
    let response = {...constants.defaultServerResponse};
    try{
        const serviceResponse = await productService.getProductById(req.params);
        response.status = constants.serverStatus.SERVER_SUCESS_STATUS;
        response.message = constants.productMessage.PRODUCTS_FETCHED;
        response.body = serviceResponse;
        //console.log(response);

    } catch(error){
        response.status = constants.serverStatus.SERVER_ERROR_STATUS;
        response.message = error.message;
        response.body = {};
    }
    return res.status(response.status).send(response);

};

module.exports.updateProduct = async (req, res) => {    
    let response = {...constants.defaultServerResponse};
    try{
        const serviceResponse = await productService.updateProduct(
                {id: req.params.id, updateInfo: req.body}
            );
        response.status = constants.serverStatus.SERVER_SUCESS_STATUS;
        response.message = constants.productMessage.PRODUCT_UPDATED;
        response.body = serviceResponse;
        //console.log(response);

    } catch(error){
        response.status = constants.serverStatus.SERVER_ERROR_STATUS;
        response.message = error.message;
        response.body = {};
    }
    return res.status(response.status).send(response);

};

module.exports.deleteProduct = async (req, res) => {    
    let response = {...constants.defaultServerResponse};
    try{
        const serviceResponse = await productService.deleteProduct(req.params);
        response.status = constants.serverStatus.SERVER_SUCESS_STATUS;
        response.message = constants.productMessage.PRODUCT_DELETED;
        response.body = serviceResponse;
        //console.log(response);

    } catch(error){
        response.status = constants.serverStatus.SERVER_ERROR_STATUS;
        response.message = error.message;
        response.body = {};
    }
    return res.status(response.status).send(response);

};