const mongoose = require('mongoose');

const url = "172.17.0.3";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(url, { 
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
         });
        console.log(`connected to mongodb`)
    } catch (err) {
        console.log(`error: ${err.message}`)
    }
    
}

module.exports = connectDB;
