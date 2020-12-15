const fs = require('fs');

// table streams/csv paths
const writeHomes = fs.createWriteStream('./CSV/psqlDataHome.csv');
writeHomes.write('id,date,price,hoa,insurance, yearAssessed, tax, assesment, interestRate\n', 'utf8');

const writeTaxes = fs.createWriteStream('./CSV/psqlTaxAssesment.csv');
writeTaxes.write('home_id,year,tax,assesment\n', 'utf-8');

const writeHistory = fs.createWriteStream('./CSV/psqlPriceHistory.csv');
writeHistory.write('id,home_id,date,price,hoa, insurance, yearAssessed, tax, assesment, interestRate, event\n', 'utf-8');

const writeNeighborhood = fs.createWriteStream('./CSV/psqlNeighborhood.csv');
writeNeighborhood.write('id,zip,interestRate\n', 'utf-8');



// helper functions
const generatePrice = () => {
    return 10000 * (Math.floor(Math.random() * 250) + 50);
}
const generateHOA = () => {
    return 10 * (Math.floor(Math.random() * 100))
}
const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
};

function homePriceObject() {
  this.price = getRandomIntInclusive(100000, 2000000);
  this.tax = Math.floor(this.price * 0.025);
  this.assesment = Math.floor(this.tax * 25);
  this.history1 = Math.floor(this.price * .8);
  this.history2 = Math.floor(this.price * .6);
  this.history3 = Math.floor(this.price * .5);
  this.history4 = Math.floor(this.price * .4);
  this.history5 = Math.floor(this.price * .3);
};


const homePriceObjects = [];
const seedHomePriceObjects = async () => {
  for (var i = 0; i < 10000; i++) {
    let price = getRandomIntInclusive(100000, 2000000);
    homePriceObjects.push({
      price: price,
      yearAssessed: getRandomIntInclusive(0, 1) ? 2015 :2020,
      tax: Math.floor(price * 0.025),
      assesment: Math.floor(price * 0.025 * 25),
      history1: Math.floor(price * .8),
      history2: Math.floor(price * .6),
      history3: Math.floor(price * .5),
      history4: Math.floor(price * .4),
      history5: Math.floor(price * .3)
    });
  }
  return;
}

async function writeTenMillionHomeRecords(writer, encoding, callback) {
    let i = 1000;
    let id = 0;
    //let neighborhood_id = 0
    function write() {
      let ok = true;
      do {
        i -= 1;
        id += 1;
        //neighborhood_id += 1
        let randomHomePriceObject = homePriceObjects[getRandomIntInclusive(0, 9999)];
        const price = randomHomePriceObject.price;
        const date = "Current";
        const hoa = getRandomIntInclusive(0,1) ? generateHOA() : 0;
        const insurance = 75;
        const yearAssessed = 2020;
        const tax = randomHomePriceObject.tax;
        const assesment = randomHomePriceObject.assesment;
        const interestRate = Math.floor(Math.random()*650)/100; 
        const data = `${id},${date},${price},${hoa},${insurance},${yearAssessed}, ${tax}, ${assesment}, ${interestRate}\n`;
        /*if (neighborhood_id > 9999) {
          neighborhood_id = 0
        }*/
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

  async function writeTenMillionTaxRecords(writer, encoding, callback) {
    let i = 10000000;
    let home_id = 0;
    let neighborhood_id = 0;
    let homePriceObjects = 
    function write() {
      let ok = true;
      do {
        i -= 1;
        home_id += 1;
        neighborhood_id += 1;
        const year = getRandomIntInclusive(0, 1) ? 2015 :2020;
        const tax = homePriceObjects[neighborhood_id - 1].tax;
        const assesment = homePriceObjects[neighborhood_id - 1].assesment;
        const data = `${home_id},${year},${tax},${assesment}\n`;
        if(neighborhood_id > 9999) {
          neighborhood_id = 0;
        }
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

  async function writeFiftyMillionHistoryRecords(writer, encoding, callback) {

    let i = 5000;
    let id = 0
    let home_id = 0;
    let yearIndex = 0;
    let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
    let years = [2018, 2012, 2007, 2004, 2000, 1994]
    function write() {
      let ok = true;
      do {
        let randomHomePriceObject = homePriceObjects[getRandomIntInclusive(0, 9999)];
        i -= 1;
        id += 1;
        home_id += 1;
        const date = `${months[getRandomIntInclusive(0,11)]}/${days[getRandomIntInclusive(0,27)]}/${years[yearIndex]}`;
        switch(yearIndex) {
          case 0:
            price = randomHomePriceObject.history1;
          case 1:
            price = randomHomePriceObject.history2;
          case 2:
            price = randomHomePriceObject.history3;
          case 3:
            price = randomHomePriceObject.history4;
          case 4:
            price = randomHomePriceObject.history5;
              
        }
        const hoa = getRandomIntInclusive(0,1) ? generateHOA() : 0;
        const insurance = 75;
        const yearAssessed = years[yearIndex] - (years[yearIndex] % 5);
        const tax = randomHomePriceObject.tax;
        const assesment = randomHomePriceObject.assesment;
        const interestRate = Math.floor(Math.random()*650)/100;
        const event = (Math.random() * 0.7) ? "Sold" : "Listed For Sale";
        const data = `${id},${home_id},${date},${price},${hoa},${insurance},${yearAssessed},${tax},${assesment},${interestRate},${event}\n`;
        
        if (home_id > 999) {
          home_id = 0
          yearIndex +=1
        }

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

  async function writeTenKNeighborhoodRecords(writer, encoding, callback) {
    await seedHomePriceObjects();
    let i = 10000;
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
  
  seedHomePriceObjects();

  writeTenMillionHomeRecords(writeHomes, 'utf-8', () => {
    writeHomes.end();
  });



  writeFiftyMillionHistoryRecords(writeHistory, 'utf-8', () => {
    writeHistory.end();
  });
/*
writeTenKNeighborhoodRecords(writeNeighborhood, 'utf-8', () => {
    writeNeighborhood.end();
});

writeTenMillionTaxRecords(writeTaxes, 'utf-8', () => {
  writeTaxes.end();
});*/