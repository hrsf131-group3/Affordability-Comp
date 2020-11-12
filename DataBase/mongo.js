const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mortgage', {useNewUrlParser: true});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});


const PriceModel = mongoose.model('Price', new mongoose.Schema({ id: Number, homePrice: Number }));

async function DataGen() {
  for (var i = 1; i <= 100; i++) {
    var randomPrice = 1000 * (Math.floor(Math.random() * 2750) + 150)

    var price = new PriceModel({ id: i, homePrice: randomPrice })
    await price.save()
  }
}
DataGen()// uncomment to seed

