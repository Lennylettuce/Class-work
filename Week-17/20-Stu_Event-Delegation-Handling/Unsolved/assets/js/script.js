const buttons = document.getElementsByTagName('button');

const clickHandler = function () {
// TODO: Add a comment describing the purpose of this variable.
  // to hold the count (starting at 0 to be incremented via event listener for button)
  let count = 0;

  // TODO: Add a comment describing what is happening. 
    // clickhander funciton will return this function(handles count increment AND display on buttons)
  return function () {
  
   // TODO: Add a comment describing how this variable is being scoped. 
    //scoped inside the return function (a funciton turducken!) ---!!! since it is scoped here it doesn't get reset
    count++;
   // TODO: Add a comment describing how we are using the 'count' variable.
    // using count variable here as display(textContent)for 
    // this. becomes the event.target within this function
    this.textContent = `Clicks: ${count}`;
  };
};

// TODO: Add a comment describing the purpose of this loop.
  // for as many buttons there are assign this clickHandler that houses this other function that handles the increment and display by using that data
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', clickHandler());
}
