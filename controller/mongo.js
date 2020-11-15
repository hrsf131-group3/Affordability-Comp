/* eslint-disable array-callback-return */
const mongo = require('../DataBase/mongo.js');

module.exports = {
  get: (req, res) => {
    const random = Math.floor((Math.random() * 100) + 1);
    const query = mongo.Price.where({ id: random });
    query.findOne((err, data) => {
      if (err) {
        res.status(404);
      } else {
        res.status(200).send(data);
      }
    });
  },
  getAll: (req, res) => {
    mongo.Price.find((err, data) => {
      if (err) {
        res.status(404);
      } else {
        res.status(200).send(data);
      }
    });
  },

};
