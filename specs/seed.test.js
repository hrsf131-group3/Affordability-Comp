/**
 * @jest-environment node
*/
/* eslint-disable array-callback-return */
/* eslint-disable no-undef */
const mongoose = require('mongoose');

describe('drop', () => {
  let connection;
  let db;

  it('should seed DB', async () => {
    connection = await mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });
    db = await mongoose.connection;//  tried removing async
    await db.collection('testing').deleteMany({});
    console.log('opened connection');

    const testing = db.collection('testing');

    const mock = { id: 2, homePrice: 666 };
    await testing.insertOne(mock);
    const inserted = await testing.findOne({ homePrice: 666 });
    expect(inserted).toStrictEqual(mock);

    console.log('closed connection');
    await mongoose.connection.close();
  });
});
