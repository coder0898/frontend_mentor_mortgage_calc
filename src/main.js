import "./style.css";

// DOM Element
const loanAmount = document.getElementById("loanAmount");
const loanTerm = document.getElementById("loanTerm");
const loanRate = document.getElementById("loanRate");

const repayRadio = document.getElementById("repayRadio");
const interestRadio = document.getElementById("interestRadio");

const clearAll = document.getElementById("clearAll");

const formSubmit = document.getElementById("formSubmit");

let monthlyAmount = 0,
  totalAmount = 0;
let monthlyInterest = 0,
  totalInterest = 0;

function CalculateRepayment() {
  let principalAmount = loanAmount.value;
  let termCount = loanTerm.value * 12; //term will be in year, conver to months.
  let interestRate = loanRate.value / 12 / 100; //sice rate provided by user is yearly basis, conver it to months.

  if (repayRadio.checked) {
    monthlyAmount +=
      (principalAmount * interestRate * Math.pow(1 + interestRate, termCount)) /
      (Math.pow(1 + interestRate, termCount) - 1);
    console.log(`your monthly repayment is Rs. ${monthlyAmount}`);
    totalAmount += monthlyAmount * termCount;
    console.log(`your total repayment is Rs. ${totalAmount}`);
  } else if (interestRadio.checked) {
    monthlyAmount +=
      (principalAmount * interestRate * Math.pow(1 + interestRate, termCount)) /
      (Math.pow(1 + interestRate, termCount) - 1);
    totalAmount += monthlyAmount * termCount;
    totalInterest += totalAmount - principalAmount;
    console.log(`your total interest is Rs. ${totalInterest}`);
    monthlyInterest += totalInterest / termCount;
    console.log(`your monthly interest is Rs. ${monthlyInterest}`);
  }
  ResetForm();
}

function ResetForm() {
  loanAmount.value = "";
  loanTerm.value = "";
  loanRate.value = "";
  repayRadio.checked = false;
  interestRadio.checked = false;
  (monthlyAmount = 0),
    (totalAmount = 0),
    (monthlyInterest = 0),
    (totalInterest = 0);
}

formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  CalculateRepayment();
});

clearAll.addEventListener("click", () => {
  ResetForm();
});
