const {connect}= require("mongoose")
const connectionString = process.env.MONGOOSE_CONNECTION_STRING

// connect to the database
connect(connectionString, (err,success)=>{
    if(err){
        console.log("Error connecting to the database")
    }
    else{
        console.log("Connected to the database")
    }
})