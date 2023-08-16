function getInputValue(inputId) {
  const getInput = document.getElementById(inputId);
  const parseInput = parseFloat(getInput.value);
  getInput.value = "";
  return parseInput;
}

function getTotal(inputId) {
  const totalString = document.getElementById(inputId).innerText;
  const parseTotal = parseFloat(totalString);
  return parseTotal;
}

function setTotalToText(totalId, newTotal) {
  let totalValue = document.getElementById(totalId);
  totalValue.innerText = newTotal;
}

const btnDeposit = document
  .getElementById("btn-deposit")
  .addEventListener("click", function () {
    const newDeposit = getInputValue("deposit-input");
    const depositTotal = getTotal("deposit-amount");
    const balance = getTotal("balance-amount");

    // Validation part
    if (isNaN(newDeposit)) {
      alert("Please enter a valid amount");
      return;
    }
    const newTotal = newDeposit + depositTotal;
    setTotalToText("deposit-amount", newTotal);
    let newBalance = balance + newDeposit;
    setTotalToText("balance-amount", newBalance);
  });

const btnWithdraw = document
  .getElementById("btn-withdraw")
  .addEventListener("click", function () {
    const newWithdraw = getInputValue("withdraw-input");
    const withdrawTotal = getTotal("withdraw-amount");
    const balance = getTotal("balance-amount");
    // Validation part
    if (isNaN(newWithdraw) || newWithdraw > balance) {
      alert("Please enter a valid amount");
      return;
    }
    const newTotal = newWithdraw + withdrawTotal;
    setTotalToText("withdraw-amount", newTotal);
    let newBalance = balance - newWithdraw;
    setTotalToText("balance-amount", newBalance);
  });
