/* eslint-disable array-callback-return */
const Listing = require('../DataBase/schema.js');

module.exports.getListing = async (req, res, next) => {
  try {
    const listing = await Listing.find({"listing_id": req.params.id});
    if(!listing) {
      return res.status(404).json({
        success: false,
        error: 'No such listing found'
      });
    }
    res.status(200).json(listing);
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
}

module.exports.addListing = async (req, res, next) => {
  try {
    
  } catch (error) {
    
  }
}

module.exports.updateListing = async (req, res, next) => {
  try {
    
  } catch (error) {
    
  }
}

module.exports.deleteListing = async (req, res, next) => {
  try {
    
  } catch (error) {
    
  }
}
