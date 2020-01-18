const express = require('express');
const router = express.Router();

const userController = require('../controller/userController');
const joiSchemaValidation = require('../middleware/JoiSchemaValidation');
const userSchema = require('../aipSchema/userSchema');

router.post('/signup',
        joiSchemaValidation.validateBody(userSchema.signupSchema), 
        userController.signup
    );
router.post('/login',
        joiSchemaValidation.validateBody(userSchema.logiSchema),
        userController.login
        );

module.exports = router;