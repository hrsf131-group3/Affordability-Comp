/* eslint-disable array-callback-return */
/* eslint-disable no-undef */
const mongoose = require('mongoose');
const mongo = require('../DataBase/mongo.js');
const seed = require('../seed');

describe('drop', () => {
  beforeAll(async () => {
    connection = mongoose.connect('mongodb://localhost/mortgage', { useNewUrlParser: true });
    db = await mongoose.connection;
  });
  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  it('should drop DB', async () => {
    seed.drop();
    await mongo.Price.find((err, data) => { expect(data.length).toBe(0); });
  });
  it('should seed DB', async () => {
    await seed.DataGen();
    await mongo.Price.find((err, data) => { expect(data.length).toBe(100); });
  });
});
