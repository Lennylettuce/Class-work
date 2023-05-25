// function to block the stack for x number of milliseconds
const pause = milliSeconds => {
setTimeout(() => {
const submitButton = document.querySelector('form button');
submitButton.classList.remove('display-none');
}, milliSeconds); 
}

pause(8000);


