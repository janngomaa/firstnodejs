const Product = require('../database/models/productModel');
const {formatMongoDBData, checkObjecId} = require('../helper/dbHelper');
const constants = require('../constants');

module.exports.createProduct = async (serviceData) => {
    try{
        let product = new Product({...serviceData});
        let result = await product.save();
        return formatMongoDBData(result);
    } catch(error) {
        console.log('productService: cannot create product', product);
        console.log(error);
        throw new Error(error);

    }

}

module.exports.getAllProducts = async ({skip=0, limit=10}) => {
    try{
        let products = await Product.find({}).skip(parseInt(skip)).limit(parseInt(limit));
        return formatMongoDBData(products);
    } catch(error) {
        console.log('productService: cannot fetch products', product);
        console.log(error);
        throw new Error(error);

    }

}

module.exports.getProductById = async ({ id }) => {
    try{
        checkObjecId(id);
        let product = await Product.findById(id);
        if(!product){
            throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
        }
        return formatMongoDBData(product);
    } catch(error) {
        console.log('productService: cannot fetch product');
        console.log(error);
        throw new Error(error);

    }

}

module.exports.updateProduct = async ({ id, updateInfo }) => {
    try{
        checkObjecId(id);
        let product = await Product.findOneAndUpdate(
            { _id: id },
            updateInfo,
            {new: true}
        );

        if(!product){
            throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
        }
        return formatMongoDBData(product);
    } catch(error) {
        console.log('productService: cannot update product');
        console.log(error);
        throw new Error(error);

    }

}

module.exports.deleteProduct = async ({ id }) => {
    try{
        checkObjecId(id);
        let product = await Product.findByIdAndDelete(id);
        if(!product){
            throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
        }
        return formatMongoDBData(product);
    } catch(error) {
        console.log('productService: cannot fetch product');
        console.log(error);
        throw new Error(error);

    }

}