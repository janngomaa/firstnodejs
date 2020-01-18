const mongosse = require('mongoose');

module.exports = async()=>{
    try{
        await mongosse.connect(process.env.db_url, {useNewUrlParser:true,  useUnifiedTopology: true});
        console.log('Connected to DB!');
    } catch(error){
        console.log('Database connectivity error, error');
        throw new Error(error);
    } 
}