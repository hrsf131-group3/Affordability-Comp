/* eslint-disable no-undef */

// @jest-environment node

const axios = require('axios');

const seed = require('../seed');
// const mongo = require('../DataBase/mongo');

describe('API to DB', () => {
  beforeAll(async () => {
    await seed.drop();
    await seed.DataGen();
  });

  it('should receive data from DB through API call', () => {
    axios.get('/dbs')
      .then((data) => expect(data.length).toEqual(100));
  });
});
