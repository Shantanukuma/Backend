const mongoose = require('mongoose')

function connectToMongoDb() {
    mongoose.connect(process.env.DB_CONNECT).then(()=> {
        console.log("Connected successfully")
    }).catch((err) => {
        console.log("mongodb connection error");
        
    })
}


module.exports = connectToMongoDb
