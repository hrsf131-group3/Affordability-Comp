/* eslint-disable array-callback-return */
const schema = require('../DataBase/schema.js');
const mongo = require('../DataBase/mongo');

module.exports = {
  get: (req, res) => {
    mongo.connect();
    const random = Math.floor((Math.random() * 100) + 1);
    const query = schema.Price.where({ id: random });
    query.findOne((err, data) => {
      if (err) {
        res.status(404);
      } else {
        res.status(200).send(data);
        mongo.db.close();
      }
    });
  },
  getAll: (req, res) => {
    mongo.connect();
    schema.Price.find((err, data) => {
      if (err) {
        res.status(404);
      } else {
        res.status(200).send(data);
        mongo.db.close();
      }
    });
  },
};
