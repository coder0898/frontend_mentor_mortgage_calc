import "./style.css";

// DOM Element
const loanAmount = document.getElementById("loanAmount");
const loanTerm = document.getElementById("loanTerm");
const loanRate = document.getElementById("loanRate");
const formSubmit = document.getElementById("formSubmit");

let monthlyAmount = 0,
  totalAmount = 0;

function CalculateRepayment() {
  let principalAmount = loanAmount.value;
  let termCount = loanTerm.value * 12; //term will be in year, conver to months.
  let interestRate = loanRate.value / 12 / 100; //sice rate provided by user is yearly basis, conver it to months.

  monthlyAmount +=
    (principalAmount * interestRate * Math.pow(1 + interestRate, termCount)) /
    (Math.pow(1 + interestRate, termCount) - 1);
  console.log(`your monthly repayment is Rs. ${monthlyAmount}`);
  totalAmount += monthlyAmount * termCount;
  console.log(`your total repayment is Rs. ${totalAmount}`);
}

formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  CalculateRepayment();
});
