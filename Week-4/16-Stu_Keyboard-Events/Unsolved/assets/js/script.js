var keyValue = querySelector("#key");
var keyCode = querySelector("#code");
//gave them variables to i can work with them in function below, query select to id from html

function keydownAction(event) {
  // TODO: Complete keydown function
  //add code for value input and keycode

  

  document.querySelector("#status").innerHTML = "KEYDOWN Event";
  event.preventDefault();
}

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event

document.addEventListener("keydown", keydownAction);
