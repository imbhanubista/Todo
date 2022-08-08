const { json } = require('express');
const express = require('express');
const app = express();
// dotenv package
require('dotenv').config();
const port = process.env.PORT || 5001;

// strict mode 
require ("strict-mode")(()=>{
    // connection to the database
    require('./src/database/databaseConnection');

    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    // to import the router file from the routes folder
    const router = require('./src/routes/index');
    app.use('/api', router);



    app.listen (port, (err)=>{
        if(err){
            console.log(err);
        }
        console.log(`Server is running on port ${port}`);
    })


})