// styling purpose
const amountInputGroup = document.getElementById("amountInputGroup");
const amountSpan = document.getElementById("amountSpan");

const rateInputGroup = document.getElementById("rateInputGroup");
const rateSpan = document.getElementById("rateSpan");

const termInputGroup = document.getElementById("termInputGroup");
const termSpan = document.getElementById("termSpan");

// error
const amountError = document.getElementById("amountErorr");
const termError = document.getElementById("termError");
const rateError = document.getElementById("rateError");

export function ResetForm() {
  loanAmount.value = "";
  loanTerm.value = "";
  loanRate.value = "";
  repayRadio.checked = false;
  interestRadio.checked = false;
  amountError.innerText = "";
  rateError.innerText = "";
  termError.innerText = "";
  amountInputGroup.style.border = "";
  rateInputGroup.style.border = "";
  termInputGroup.style.border = "";

  amountSpan.style.backgroundColor = "";
  rateSpan.style.backgroundColor = "";
  termSpan.style.backgroundColor = "";
  amountSpan.style.color = "";
  rateSpan.style.color = "";
  termSpan.style.color = "";

  (monthlyAmount = 0),
    (totalAmount = 0),
    (monthlyInterest = 0),
    (totalInterest = 0);
}

// validating input
export function ValidateInput(amount, rate, months) {
  let isValid = true;

  // Clear previous error messages and styles
  amountError.innerText = "";
  rateError.innerText = "";
  termError.innerText = "";

  // Reset styles
  amountInputGroup.style.border = "";
  rateInputGroup.style.border = "";
  termInputGroup.style.border = "";

  amountSpan.style.backgroundColor = "";
  rateSpan.style.backgroundColor = "";
  termSpan.style.backgroundColor = "";

  // Validate Amount
  if (!amount || isNaN(amount) || amount <= 0) {
    amountError.innerText = "Please enter a valid amount";
    amountError.style.color = "var(--red-color)";
    amountInputGroup.style.border = `2px solid var(--red-color)`;
    amountSpan.style.backgroundColor = "var(--red-color)";
    amountSpan.style.color = "#fff";
    isValid = false;
  }

  // Validate Interest Rate
  if (!rate || isNaN(rate) || rate < 0) {
    rateError.innerText = "Please enter a valid interest rate";
    rateError.style.color = "var(--red-color)";
    rateInputGroup.style.border = `2px solid var(--red-color)`;
    rateSpan.style.backgroundColor = "var(--red-color)";
    rateSpan.style.color = "#fff";
    isValid = false;
  }

  // Validate Loan Term
  if (!months || isNaN(months) || months <= 0) {
    termError.innerText = "Please enter a valid loan term";
    termError.style.color = "var(--red-color)";
    termInputGroup.style.border = `2px solid var(--red-color)`;
    termSpan.style.backgroundColor = "var(--red-color)";
    termSpan.style.color = "#fff";
    isValid = false;
  }

  return isValid;
}
