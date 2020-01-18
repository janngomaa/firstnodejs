const mongoose = require('mongoose');
const constants = require('../constants');

module.exports.formatMongoDBData = (data) =>{
    /*
    * *** Formats MongoDB object ot rename/remove technical field
    * *** such as _id. Those changes are not save to the DB, but 
    * *** made only to better user experience. 
    */
    if(Array.isArray(data)){/** If list format each elt */
        let newDataList = [];
        for(value of data){
            newDataList.push(value.toObject());
        }
        return newDataList;

    }
    return data.toObject();
}

module.exports.checkObjecId = (id) =>{
    /*
    * *** Checks if an Id is valid within the DB
    */
    if(!mongoose.Types.ObjectId.isValid(id)){
        throw new Error(constants.databaseMessage.INVALID_ID);
    }

}