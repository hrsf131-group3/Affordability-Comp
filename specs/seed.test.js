/* eslint-disable array-callback-return */
/* eslint-disable no-undef */
const mongoose = require('mongoose');
// const mongo = require('../DataBase/mongo.js');
// const seed = require('../seed');

describe('drop', () => {
  let connection;
  let db;
  beforeAll(async () => {
    connection = await mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });
    db = await mongoose.connection;
    await db.collection('prices').deleteMany({});
    console.log('opened connection');
  });
  afterAll(async () => {
    console.log('closed connection');
    await mongoose.connection.close();
  });

  it('should seed DB', async () => {
    const prices = await db.collection('prices');

    const mock = { id: 2, homePrice: 666 };
    await prices.insertOne(mock);
    const inserted = await prices.findOne({ homePrice: 666});
    expect(inserted).toEqual(mock);
  });
});
