//import from db eventually
var homePrice = 1200000;
var downPaymentPercent = .2;
var interestRate = .0292;
var downPayment = downPaymentPercent * homePrice;
var monthlyRate = interestRate/12;
var loanLife = 30;
var paymentsInLoanLife= loanLife * 12;

var segment = 1 + (Math.pow(monthlyRate, paymentsInLoanLife));
var total = segment / (segment - 1);

var payment = Math.round(((homePrice - downPayment) * monthlyRate) / (1 - (1 / Math.pow((1+monthlyRate), paymentsInLoanLife ))));

var mortageInsurance = 0;

if (downPaymentPercent < .2) {
  mortageInsurance = 356 + ((.2 - downPaymentPercent) * 100)
}


var math = {
  homePrice: homePrice, // pulled from DB once in place
  downPayment: downPaymentPercent * homePrice,
  interestRate: interestRate,
  payment: payment,
  principalInterest: payment,
  propertyTax: Math.round(payment * .16724),
  homeInsurance: 75,
  mortageInsurance: mortageInsurance
}
// console.log(math)

export default math
