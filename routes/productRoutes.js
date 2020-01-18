const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');
const joiSchemaValidation = require('../middleware/JoiSchemaValidation');
const tokenValidation = require('../middleware/tokenValidation');
const productSchema = require('../aipSchema/productSchema');

router.post('/', 
            tokenValidation.validateToken,
            joiSchemaValidation.validateBody(productSchema.createProductSchema), 
            productController.createProduct
);
router.put('/:id', 
            tokenValidation.validateToken,
            joiSchemaValidation.validateBody(productSchema.upateProductSchema),
            productController.updateProduct
);

/*
* *** Use the path parameters to fetch the product
*/
router.get('/:id', 
            tokenValidation.validateToken,
            productController.getProductById
);

router.get('/',
            tokenValidation.validateToken,
            joiSchemaValidation.validateRequestParams(productSchema.getAllProductsSchema),
            productController.getAllProducts
);

router.delete('/:id', 
            tokenValidation.validateToken,
            productController.deleteProduct
);

module.exports = router;