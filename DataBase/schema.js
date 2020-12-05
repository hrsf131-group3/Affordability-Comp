const mongoose = require('mongoose');

const homeModel = mongoose.model('Home', new mongoose.Schema({
  "askingPrice": Number,
  "hoa": Number,
  "insurance": Number,
  "taxAndAssesment": [{
       "year": Date,
       "tax": Number,
       "assesment": Number
  }],
  "priceHistory": [{
       "date": Date,
       "price": Number,
       "event": String
  }],
  "neighborhood": {
       "zip": Number, 
       "interestRate": Number
  }
}));