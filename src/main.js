import "./style.css";
import { ResetForm, ValidateInput } from "./util";

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

// function to calculate monthly payement and yearly
function CalculatePayment() {
  monthlyAmount +=
    (principalAmount * interestRate * Math.pow(1 + interestRate, termCount)) /
    (Math.pow(1 + interestRate, termCount) - 1);
  totalAmount += monthlyAmount * termCount;
}

// function to calculate monthly interest and yearly
function CalculateInterest() {
  totalInterest += totalAmount - principalAmount;
  monthlyInterest += totalInterest / termCount;
}

function CalculateRepayment() {
  let principalAmount = loanAmount.value;
  let termCount = loanTerm.value * 12; //term will be in year, conver to months.
  let interestRate = loanRate.value / 12 / 100; //sice rate provided by user is yearly basis, conver it to months.

  if (!ValidateInput(principalAmount, interestRate, termCount)) return;

  if (repayRadio.checked) {
    CalculatePayment();
    console.log(`your monthly repayment is Rs. ${monthlyAmount}`);
    console.log(`your total repayment is Rs. ${totalAmount}`);
  } else if (interestRadio.checked) {
    CalculatePayment();
    CalculateInterest();
    console.log(`your total interest is Rs. ${totalInterest}`);
    console.log(`your monthly interest is Rs. ${monthlyInterest}`);
  }
  ResetForm();
}

formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  CalculateRepayment();
});

clearAll.addEventListener("click", () => {
  ResetForm();
});
