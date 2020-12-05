const fs = require('fs');
const faker = require('faker');
const tenMillion = 10000000

const writeMongo = fs.createWriteStream('./CSV/mongoData.csv');
writeMongo.write('askingPrice,hoa,insurance, taxAndAssesment, year, tax, assesment, priceHistory, date, event, neighborhood, zip, interestRate\n', 'utf-8');


function writeTenMillionMongoRecords(writer, encoding, callback) {
    let i = 100;
    let id = 0;
    function write() {
      let ok = true;
      do {
        i -= 1;
        id += 1;
        const askingprice = generatePrice();
        const hoa = generateHOA();
        const insurance = 75;
        const taxAndAssesment = id;
        const year = generateYear();
        const tax = generateTax();
        const assesment= generatePrice();
        const priceHistory = generatePrice();
        const date = generateDate();
        const event = generateEvent();
        const neighborhood = id;
        const zip = Math.floor(Math.random()*89999+10000);
        const interestRate = Math.floor(Math.random()*650)/100;
        const data = `${id},${askingprice},${hoa},${insurance},${taxAndAssesment},${year},${tax},${assesment},${priceHistory},
        ${date},${event},${neighborhood},${zip},${interestRate}\n`;
        if (i === 0) {
          writer.write(data, encoding, callback);
        } else {
  // see if we should continue, or wait
  // don't pass the callback, because we're not done yet.
          ok = writer.write(data, encoding);
        }
      } while (i > 0 && ok);
      if (i > 0) {
  // had to stop early!
  // write some more once it drains
        writer.once('drain', write);
      }
    }
  write()
  }
// helper functions
const generatePrice = () => {
    return 10000 * (Math.floor(Math.random() * 250) + 50);
}
const generateHOA = () => {
    return 10 * (Math.floor(Math.random() * 100))
}
const generateTax = () => {
    return 75 * (Math.floor(Math.random() * 100))
}
const generateYear = () => {
    let lastAssesment = Math.random() < 0.5;
    if (lastAssesment) {
        return 2015;
    } else {
        return 2020;
    }
}
const generateEvent = () => {
    let event = Math.random() < 0.7;
    if (event) {
        return 'Sold';
    } else {
        return 'Listed For Sale';
    }
}
const generateDate = () => {
    faker.date.between('2020-12-4', '1990-12-4');
}


writeTenMillionMongoRecords(writeMongo, 'utf-8', () => {
    writeMongo.end();
});
