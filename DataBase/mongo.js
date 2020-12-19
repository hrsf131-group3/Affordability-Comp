const mongoose = require('mongoose');

const url = "mongodb://localhost:27017/trelia";

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
