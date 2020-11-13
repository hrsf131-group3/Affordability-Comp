// import from db eventually
const homePrice = 1200000;
const downPaymentPercent = 0.2;
const interestRate = 0.0292;
const downPayment = downPaymentPercent * homePrice;
const monthlyRate = interestRate / 12;
const loanLife = 30;
const paymentsInLoanLife = loanLife * 12;
const firstEQ = ((homePrice - downPayment) * monthlyRate);

const payment = Math.round(firstEQ / (1 - (1 / ((1 + monthlyRate) ** paymentsInLoanLife))));

let mortageInsurance = 0;

if (downPaymentPercent < 0.2) {
  mortageInsurance = 356 + ((0.2 - downPaymentPercent) * 100);
}

const math = {
  homePrice, // pulled from DB once in place
  downPayment: downPaymentPercent * homePrice,
  interestRate,
  payment,
  principalInterest: payment,
  propertyTax: Math.round(payment * 0.16724),
  homeInsurance: 75,
  mortageInsurance,
};
// console.log(math)

export default math;
