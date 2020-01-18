const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String
}, {
    timestamps:true,
    toObject:{//To transform the returned result. But this doesn't change the DB
        transform : function (doc, ret, options) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
            return ret;
            
        }
    }
});

module.exports = mongoose.model('Product', productSchema);