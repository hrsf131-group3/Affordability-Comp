const fs = require('fs');
const faker = require('faker')

// table streams/csv paths
const writeHomes = fs.createWriteStream('./CSV/psqlDataHome.csv');
writeHomes.write('id,askingPrice,hoa,insurance,neighborhood_id\n', 'utf8');

const writeTaxes = fs.createWriteStream('./CSV/psqlTaxAssesment.csv');
writeTaxes.write('home_id,year,tax,assesment\n', 'utf-8');

const writeHistory = fs.createWriteStream('./CSV/psqlPriceHistory.csv');
writeHistory.write('home_id,date,price,event\n', 'utf-8');

const writeNeighborhood = fs.createWriteStream('./CSV/psqlNeighborhood.csv');
writeNeighborhood.write('id,zip,interestRate\n', 'utf-8');



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

/*
const dataGenHome = (numGen) => {
    writer.pipe(fs.createWriteStream('./CSV/psqlDataHome.csv'));
    for (var i = 0; i < numGen; i++) {
        writer.write({
            id: counter++,
            currentPrice: generatePrice(),
            hoa: generateHOA(), 
            insurance: 75
        })
    }
    writer.end();
    console.log('database seeded');
}

const dataGenTaxAndAssesment = (numGen) => {
    writer.pipe(fs.createWriteStream('./CSV/psqlTaxAssesment.csv'));
    for (var i = 0; i < numGen; i++) {
        writer.write({
            year: generateYear(),
            tax: generateTax(),
            assesment: generatePrice()
        })
    }
    writer.end();
    console.log('database seeded');
}

const dataGenPriceHistory = (numGen) => {
    writer.pipe(fs.createWriteStream('./CSV/psqlPriceHistory.csv'));
    for (var i = 0; i < numGen; i++) {
        writer.write({
            date: generateDate(), // generate date
            price: generatePrice(), // generate price
            event: generateEvent() // generate event
        });
    }
    writer.end();
    console.log('database seeded');
}

const dataGenNeighborhood = (numGen) => {
    writer.pipe(fs.createWriteStream('./CSV/psqlNeighborhood.csv'));
    for (var i= 0; i < numGen; i++) {
        writer.write({
            zip: Math.floor(Math.random()*89999+10000), //generate zipcode
            interestRate: Math.floor(Math.random()*650)/100 // generate interestRate
        })
    }
    writer.end();
    console.log('database seeded');
}
*/

// definitions
function writeTenMillionHomeRecords(writer, encoding, callback) {
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
        const neighborhood_id = id;
        const data = `${id},${askingprice},${hoa},${insurance},${neighborhood_id}\n`;
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

  function writeTenMillionTaxRecords(writer, encoding, callback) {
    let i = 100;
    let id = 0;
    function write() {
      let ok = true;
      do {
        i -= 1;
        id += 1;
        const year = generateYear();
        const tax = generateTax();
        const assesment = generatePrice();
        const data = `${id},${year},${tax},${assesment}\n`;
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

  function writeTenMillionHistoryRecords(writer, encoding, callback) {
    let i = 100;
    let id = 0;
    function write() {
      let ok = true;
      do {
        i -= 1;
        id += 1;
        const date = generateDate();
        const price = generatePrice();
        const event = generateEvent();
        const data = `${id},${date},${price},${event}\n`;
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

  function writeTenMillionNeighborhoodRecords(writer, encoding, callback) {
    let i = 100;
    let id = 0;
    function write() {
      let ok = true;
      do {
        i -= 1;
        id += 1;
        const zip = Math.floor(Math.random()*89999+10000);
        const interestRate = Math.floor(Math.random()*650)/100;
        const data = `${id},${zip},${interestRate}\n`;
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


 // invocations
  writeTenMillionHomeRecords(writeHomes, 'utf-8', () => {
    writeHomes.end();
  });
  writeTenMillionTaxRecords(writeTaxes, 'utf-8', () => {
      writeTaxes.end();
  });

  writeTenMillionHistoryRecords(writeHistory, 'utf-8', () => {
    writeHistory.end();
});

writeTenMillionNeighborhoodRecords(writeNeighborhood, 'utf-8', () => {
    writeNeighborhood.end();
});