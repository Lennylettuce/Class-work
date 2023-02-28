var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // TODO: Create user object from submission
  //.trim() allows for effeciency-doesnt store/show empty spaces,blah
  //can do trim end and trim start for this
  var form = {
    firstNameInput: firstNameInput.value.trim(),
    lastNameInput: lastNameInput.value.trim(),
    emailInput: emailInput.value.trim(),
    passwordInput: passwordInput.value.trim(),
  };
// TODO: Set new submission to local storage
  localStorage.setItem("form info", JSON.stringify(form));

});

//yay i did this one right first time!