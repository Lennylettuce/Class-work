
 


  // TODO: Add Event Listener for "key up/down" event
  //teacher makes this look so easy, lucky guy! lol!

function keydownAction(event) {
  var key= event.key;
  var code = event.code;

//.innerhtml does more, when adding elements/style in DOM
//has more info to access than .textContent

  document.querySelector("#key").textContent = key;
  document.querySelector("#code").textContent = code;
  document.querySelector("#status").innerHTML = "KEYDOWN Event"
}
 
function keyupAction(event) {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}


document.addEventListener("keyup" , keyupAction);
document.addEventListener("keydown", keydownAction);

