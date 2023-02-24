var tipEl = document.querySelector("#tip-percentage");
var totalEl = document.querySelector("#total");
var submitEl = document.querySelector("#submit");

function calculateTip(total, tipPercentage) {
  var roundedResult = (total * tipPercentage).toFixed(2);
  return roundedResult;
}

function calculateTotal(total, tipAmount) {
  return parseFloat(total) + parseFloat(tipAmount);
}

function addTip(event) {
  var tipPercentage = tipEl.value * .01;
  var total = totalEl.value;
  var tipAmount = calculateTip(total, tipPercentage);
  var newTotal = calculateTotal(tipAmount, total);
  document.querySelector("#tip-amount").textContent = tipAmount;
  document.querySelector("#new-total").textContent = newTotal.toFixed(2);
  event.preventDefault();
}

submitEl.addEventListener("click", addTip);


//add event.preventDefault(); to the function event is in.
//what does it mean?
//when an event happens, there's usually a browser default
//button in browser-button tries to submit/clear data so...
//use preventDefault method to 
//keep event listener not so large
//split up functions
//define event function or do all together
//preventDefault does literally what it says it does 
//for browser behavior
//prevents unexpected behaviors 