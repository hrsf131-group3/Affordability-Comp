/* eslint-disable array-callback-return */
/* eslint-disable no-undef */
const mongo = require('../DataBase/mongo.js');
const seed = require('../seed');

describe('drop', () => {
  it('should drop DB', async () => {
    seed.drop();
    await mongo.Price.find((err, data) => { expect(data.length).toBe(0); });
  });
});
describe('seed', () => {
  it('should seed DB', async () => {
    await seed.DataGen();
    await mongo.Price.find((err, data) => { expect(data.length).toBe(100); });
  });
});
