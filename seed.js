const mongo = require('./DataBase/mongo.js');

async function drop() {
  mongo.db.collections.prices.drop()
    .then(console.log('seeding DB'))
    .catch((e) => console.error(e));
}

async function DataGen() {
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= 100; i++) {
    const randomPrice = 10000 * (Math.floor(Math.random() * 250) + 50);

    const price = new mongo.Price({ id: i, homePrice: randomPrice });
    // eslint-disable-next-line no-await-in-loop
    await price.save();
  }
}
// drop();
// DataGen();

module.exports.drop = drop;
module.exports.DataGen = DataGen;
