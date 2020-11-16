// const axios = require('axios');

const downPaymentPercent = 0.2;
const interestRate = 2.88;
const monthlyRate = (interestRate / 100) / 12;
const loanLife = 30;
const paymentsInLoanLife = loanLife * 12;

let mortageInsurance = 0;

if (downPaymentPercent < 0.2) {
  mortageInsurance = 356 + ((0.2 - downPaymentPercent) * 100);
}

const math = {
  homePrice: null, // pulled from DB once in place
  downPayment: 20,
  interestRate,
  payment: null,
  principalInterest: null,
  propertyTax: null,
  homeInsurance: 75,
  mortageInsurance,
  // get,
};

function calcDownPayment() {
  math.downPayment = math.homePrice * downPaymentPercent;
}
function calcPayment() {
  const firstEQ = ((math.homePrice - math.downPayment) * monthlyRate);
  math.payment = (Math.round(firstEQ / (1 - (1 / ((1 + monthlyRate) ** paymentsInLoanLife)))));
}
function calcPropertyTax() {
  math.propertyTax = Math.round(math.payment * 0.16724);
}
function initialize() {
  // get();
  calcDownPayment();
  calcPayment();
  calcPropertyTax();
}
initialize();
// function get() {
//   axios
//     .get('/db')
//     .then((res) => { math.homePrice = res.data.homePrice; initialize(); })
//     .catch((e) => { throw e; });
// }
// get();
export default math;
