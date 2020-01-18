module.exports = {
    defaultServerResponse: {
        status: 400,
        message: 'Default message',
        body: {}
    },
    productMessage: {
        PRODUCT_CREATED: 'Product Created Successfully',
        PRODUCTS_FETCHED: 'Product(s) fetched Successfully',
        PRODUCT_NOT_FOUND: 'Product Not Found',
        PRODUCT_UPDATED: 'Product updated Successfully',
        PRODUCT_DELETED: 'Product deleted Successfully'
    },
    userMessage: {
        SIGNUP_SUCCESS: 'Signup Success',
        DUPLICATE_USER: 'User already exist with given email.',
        LOGIN_SUCCESS: 'Login Success.',
        USER_NOT_FOUND: 'User Not Found',
        INVALID_PASSWORD: 'Invalid password.'
    },
    validationMessage: {
        BAD_REQUEST_MESSAGE: 'Bad request',
        TOKEN_MISSING: 'Invalid Header. Token Missing.'
    },
    serverStatus: {
        SERVER_SUCESS_STATUS: 200,
        SERVER_ERROR_STATUS: 400,
        SERVER_BAD_REQUEST_STATUS: 500,
        SERVER_UNAUTORIZED_ACCESS: 401
    },
    databaseMessage: {
        INVALID_ID: 'Invalid Id'
    }
}