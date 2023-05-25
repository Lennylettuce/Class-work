// 1) Where is carNoise stored?
// this const is stored in the global execution context
const carNoise = 'Honk';
// 2) Where is goFast stored?
// this const is stored in the global execution context
const goFast = speed => {
  // 4) When is speed assigned a value? Where is this value stored?
  // speed is assigned in an if statment outside of this function, 
    //the function is called in an if statment and passed an argument of 80 for the speed parameter
    //the value argument is stored locally since it applies to this function and remains within this funciton execution context
  
  // 5) Where is makeNoise stored?
  // this function is also stored in this function execution context ...19
  const makeNoise = sound => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // 6) What happens in the following statement?
  // which once it is called puts it in the call stack 
  makeNoise(carNoise);
}

// 3) What happens in the following statement?
// 80 is the argument, speed parameter becomes this because you're running it as an argument here
if(confirm("Do you want to go fast?")) {
  goFast(80);
}
