const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email: String,
    password: String
}, {
    timestamps:true,
    toObject:{//To transform the returned result. But this doesn't change the DB
        transform : function (doc, ret, options) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
            delete ret.password;
            return ret;
            
        }
    }
});

module.exports = mongoose.model('User', userSchema);