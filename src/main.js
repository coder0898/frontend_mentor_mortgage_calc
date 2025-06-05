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

const resultBox = document.querySelector(".result-box");

let monthlyAmount = 0,
  totalAmount = 0;
let monthlyInterest = 0,
  totalInterest = 0;

// function to calculate monthly payement and yearly
function CalculatePayment(principal, rate, months) {
  monthlyAmount =
    (principal * rate * Math.pow(1 + rate, months)) /
    (Math.pow(1 + rate, months) - 1);
  totalAmount = monthlyAmount * months;
}

// function to calculate monthly interest and yearly
function CalculateInterest(principal, months) {
  totalInterest = totalAmount - principal;
  monthlyInterest = totalInterest / months;
}

function CalculateRepayment() {
  const principalAmount = parseFloat(loanAmount.value);
  const interestRate = parseFloat(loanRate.value) / 12 / 100;
  const termCount = parseInt(loanTerm.value) * 12;

  if (!ValidateInput(principalAmount, interestRate, termCount)) return;

  // Reset values to avoid accumulation on multiple submits
  monthlyAmount = 0;
  totalAmount = 0;
  monthlyInterest = 0;
  totalInterest = 0;

  resultBox.innerHTML = "";
  if (repayRadio.checked) {
    CalculatePayment(principalAmount, interestRate, termCount);
    resultBox.innerHTML = `
      <div class="calc-result">
        <h3>Your results</h3>
        <p>Your results are shown below based on the information you provided.</p>
        <div class="result-content">
          <div class="monthly-payment">
            <p>Your monthly repayments</p>
            <h2><span><i class="fa-solid fa-indian-rupee-sign"></i></span>${monthlyAmount.toFixed(
              2
            )}</h2>
          </div>
          <div class="yearly-payment">
            <p>Total you'll repay over the term</p>
            <h2><span><i class="fa-solid fa-indian-rupee-sign"></i></span>${totalAmount.toFixed(
              2
            )}</h2>
          </div>
        </div>
      </div>`;
  } else if (interestRadio.checked) {
    CalculatePayment(principalAmount, interestRate, termCount);
    CalculateInterest(principalAmount, termCount);
    resultBox.innerHTML = `
      <div class="calc-result">
        <h3>Your results</h3>
        <p>Your results are shown below based on the information you provided.</p>
        <div class="result-content">
          <div class="monthly-payment">
            <p>Your monthly interest</p>
            <h2><span><i class="fa-solid fa-indian-rupee-sign"></i></span> ${monthlyInterest.toFixed(
              2
            )}</h2>
          </div>
          <div class="yearly-payment">
            <p>Total interest you'll repay over the term</p>
            <h2><span><i class="fa-solid fa-indian-rupee-sign"></i></span> ${totalInterest.toFixed(
              2
            )}</h2>
          </div>
        </div>
      </div>`;
  }
}

formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  CalculateRepayment();
});

clearAll.addEventListener("click", () => {
  ResetForm(
    monthlyAmount,
    monthlyInterest,
    totalAmount,
    totalInterest,
    resultBox
  );
});

window.addEventListener("DOMContentLoaded", () => {
  ResetForm(
    monthlyAmount,
    monthlyInterest,
    totalAmount,
    totalInterest,
    resultBox
  );
});
