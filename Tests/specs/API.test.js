/* eslint-disable no-undef */

// @jest-environment node

const axios = require('axios');

describe('API to DB', () => {
  it('should receive data from DB through API call', () => {
    axios.get('/dbs')
      .then((data) => expect(data.length).toEqual(100));
  });
  it('should receive single listing from DB through API call to specific listing url', () => {
    axios.get('listings/3/')
      .then((data) => expect(data.length).toEqual(1));
  });
});
