/* eslint-disable no-undef */

// @jest-environment node

const axios = require('axios');

// const seed = require('../seed');
// const mongo = require('../DataBase/mongo');

describe('API to DB', () => {
  // beforeAll(() => {
  //   mongo.connect();
  // });
  // afterAll(() => {
  //   mongo.close();
  // });

  it('should receive data from DB through API call', () => {
    axios.get('/dbs')
      .then((data) => expect(data.length).toEqual(100));
  });
});
