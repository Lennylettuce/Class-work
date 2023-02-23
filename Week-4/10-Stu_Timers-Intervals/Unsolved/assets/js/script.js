var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

var message =
  'Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.';
var words = message.split(' ');
//the space between in the split array causes it to be spaced apart like it is in display
//using split method for string, takes this string of words and makes an array with one word/array to display one at a time
function countdown() {
  var timeLeft = 5;

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    //makes time go down by one each second
    timeLeft--;
    //plug text for user in addition to time left
    timeLeft.textContent = timeLeft + "seconds left."
    //this statement will clear the timer so it doesnt eat up your memory
    if(timeLeft === 0){
      clearInterval(timeInterval);
      displayMessage();
    }

  }, 1000);
}
//clear interval so the timer stops when you need it to, already set function/method 

// Displays the message one word at a time
function displayMessage() {
  //starts at 0
  var wordCount = 0;
  
  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var msgInterval = setInterval(function () {
    // If there are no more words left in the message
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
    } else {
      // Display one word of the message
      mainEl.textContent = words[wordCount];
      //starts at 0 uses below to increment by one each time
      wordCount++;
    }
    //1000 equals one second
  }, 1000);
}

countdown();
