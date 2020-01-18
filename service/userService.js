const User = require('../database/models/userModel');
const {formatMongoDBData} = require('../helper/dbHelper');
const constants = require('../constants');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.signup = async ({email, password}) => {
    try{
        const user = await User.findOne({email});
        if(user){
            throw new Error(constants.userMessage.DUPLICATE_USER);
        }
        password = await bcrypt.hash(password, 12);
        const newUser = new User({email, password});
        let result = await newUser.save();
        return formatMongoDBData(result);
    } catch(error) {
        console.log('userService: cannot signup user ');
        //console.log(error);
        throw new Error(error);

    }
}

module.exports.login = async ({email, password}) => {
    try{
        const user = await User.findOne({email});
        if(!user){
            throw new Error(constants.userMessage.USER_NOT_FOUND);
        }
        const isValidPass = await bcrypt.compare(password, user.password); 
        if(!isValidPass){
            throw new  Error(constants.userMessage.INVALID_PASSWORD);
        } 
        const token = jwt.sign({id: user._id}, 
                                process.env.TOKEN_SECRET_KEY||'default_secret_key', 
                                {expiresIn:process.env.TOKEN_EXPIRE}
                        ); 
        return {token};

    } catch(error) {
        console.log('userService: User not found or password not valid');
        //console.log(error);
        throw new Error(error);

    }
}

