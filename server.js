const express = require('express');
const dotEnv = require('dotenv'); 
//const cors = require('cors');
//const swaggerUI = require('swagger-ui-express');
//const YAML = require('yamljs');
//const swaggerDocument = YAML.load('./swagger.yaml');
const dbConnection = require('./database/db');


dotEnv.config();

const app = express(); 

//db connectivity
dbConnection();

//cors: restrict app calls on my domain
//app.use(cors());

//request payload middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Routing app modules
app.use('/api/v1/product', require('./routes/productRoutes'));
app.use('/api/v1/user', require('./routes/userRoutes'));

//API Documentation
//app.use('api-docs', swaggerUI.serve, swaggerUI.load(swaggerDocument));

app.get('/', (req, res, next) =>{
    res.send('Hello my API server!');
});

// Error handling Middleware (default error handling)
app.use(function(err, req, res, next){
    console.log('***************** an error occured!');
    console.error(err.stack);
    res.status(500).send({
        status:500, 
        message:err.message, 
        body:{}});
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log(`Server listening on port ${PORT}`);
});