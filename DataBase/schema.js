const mongoose = require('mongoose');

// const ListingSchema = new mongoose.Schema({
//      "listing_id": Number,
//      "price": Number,
//      "hoa": Number,
//      "insurance": Number,
//      "taxAndAssesment": {
//           "year": Date,
//           "tax": Number,
//           "assesment": Number
//      },
//      "priceHistory": [{
//           "date": Date,
//           "price": Number,
//           "event": String
//      }],
//      "neighborhood": {
//           "zip": Number, 
//           "interestRate": Number
//      }
// });

module.exports = mongoose.model('Listing', ListingSchema)

const ListingSchema = new mongoose.Schema({
     listing_id:{type:Number, required: true, unique: true},
     price:{type:Number, required: true},
     hoa: {type: Number, required: true},
     insurance: {type: Number, required: true},
     taxes: {
          year: {type: Number},
          tax: {type: Number},
          assesment: {type: Number}
     },
     priceHistory: [
          {
               year: {type: Number}, price: {type: Number}, event: {type: String}
          }
     ],
     neighborhood: {
          zip: {type: Number}, interestRate: {type: Number}
     }
});