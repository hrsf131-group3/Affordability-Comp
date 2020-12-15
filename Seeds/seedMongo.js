const fs = require('fs');
// HELPER FUNCTIONS:
/// ////////////////////////////////////////////////////////////////////////////////////////////////
// returns a random number
const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
  };
  const generateHOA = () => {
    return 10 * (Math.floor(Math.random() * 100))
}

// DATA GENERATION FUNCTIONS
/// /////////////////////////////////////////////////////////////////////////////////////////
//general data generation function
function generateTaxAndAssesment(price) {
    let result = {
        year: getRandomIntInclusive(0, 1) ? 2015 :2020,
        tax: Math.floor(price * 0.025),
        assesment: Math.floor(price * 0.025 * 25)
    };
    return result;
}

function generatePriceHistory(price) {
    let equity = .9;
    let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
    let years = [2018, 2012, 2007, 2004, 2000, 1994]
    let result = [];
    for (var i = 0; i < 6; i++) {
        let record = {
            "date": `${months[getRandomIntInclusive(0,11)]}/${days[getRandomIntInclusive(0,27)]}/${years[i]}`,
            "price": Math.floor(price * equity),
            "event": getRandomIntInclusive(0,1) * 0.8 ? "Sold" : "Listed For Sale"
        }
        result.push(record);
        equity -= 0.15;
    }
    return result;
}

function generateNeighborhood() {
    let result = {
        "zip": Math.floor(Math.random()*89999+10000),
        "interestRate": Math.floor(Math.random()*650)/100
    }
    return result;
}

// generate a randomized listing object
function createListing(listing_id) {
    const price = getRandomIntInclusive(100000, 2000000);
    const hoa =  getRandomIntInclusive(0,1) ? generateHOA() : 0;
    const insurance = 75;
    const taxAndAssesment = generateTaxAndAssesment(price);
    const priceHistory = generatePriceHistory(price);
    const neighborhood = generateNeighborhood();
  return (JSON.stringify({
    listing_id: listing_id,
    price: price,
    hoa: hoa,
    insurance: insurance,
    taxAndAssesment: taxAndAssesment,
    priceHistory: priceHistory,
    neighborhood: neighborhood
  })
    );
}


// WRITE-TO-FILE FUNCTION
/// //////////////////////////////////////////////////////////////////////////////////
function toJSONFile(fileLength) {
  const writer = fs.createWriteStream(`/home/erenvilla/sdc/affordability-comp/JSON/mongoData.json`);
  let counter = 0;
  const start = Date.now();
  function write() {
    let ok = true;
    do {
       if (counter === 0) {
         writer.write('[');
       }
      counter++;
      if (counter === fileLength) {
        writer.write(createListing(counter) + '\n');
        writer.end(']');
        console.log(`Data generation done! Whole process took:`, `${(Date.now() - start) / (1000 * 60)} minutes`);
      } else {
        ok = writer.write(createListing(counter) + ',\n');
      }
    } while (counter < fileLength && ok);
    if (counter < fileLength) {
      if (!ok) {
        writer.once('drain', write);
      }
    }
  }
  write();
}
toJSONFile(10000000);