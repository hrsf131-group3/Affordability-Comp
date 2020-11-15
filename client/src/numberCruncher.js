const downPaymentPercent = 0.2;
const interestRate = 0.0292;
const monthlyRate = interestRate / 12;
const loanLife = 30;
const paymentsInLoanLife = loanLife * 12;

let mortageInsurance = 0;

if (downPaymentPercent < 0.2) {
  mortageInsurance = 356 + ((0.2 - downPaymentPercent) * 100);
}

const math = {
  homePrice: 1000000, // pulled from DB once in place
  downPayment: 40,
  interestRate,
  payment: null,
  principalInterest: null,
  propertyTax: null,
  homeInsurance: 75,
  mortageInsurance,
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
  calcDownPayment();
  calcPayment();
  calcPropertyTax();
}
initialize();

export default math;
