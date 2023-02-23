var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

function setCounterText() {
  countEl.textContent = count;

  var timeInterval = setInterval(function(){
    
  if(count > 0){
    
  }else(){
    timeInterval
  }

  }, 1000);

} 



// TODO: Add event listener to increment button

incrementEl.addEventListener('click' , setInterval);

// TODO: Add event listener to decrement button 

decrementEl.addEventListener('click' , setInterval);