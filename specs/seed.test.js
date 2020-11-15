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
    connection = await mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true })
      .then(console.log('setting address'))
      .catch(e => { console.log('problem setting address'); });
    db = await mongoose.connection
      .then(console.log('starting handshake'))
      .catch(e => { console.log('starting handshake'); });
    const testing = await db.collection('testing')
      .then(console.log('connecting to collection'))
      .catch(e => { console.log('problem connecting to collection'); });
    await testing.deleteMany({})
      .then(console.log('DB cleared'))
      .catch(e => { console.log('problem clearing DB'); });
    const mock = { id: 2, homePrice: 666 };
    await testing.insertOne(mock)
      .then(console.log('DB populated'))
      .catch(e => { console.log('problem populating DB'); });
    const inserted = await testing.findOne({ homePrice: 666 })
      .then(console.log('found instance'))
      .catch(e => { console.log('problem finding instance'); });
    expect(inserted).toStrictEqual(mock);

    await mongoose.connection.close()
      .then(console.log('closed connection'))
      .catch(e => { console.log('problem closing DB'); });
  });
});
