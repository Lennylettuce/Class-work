// TODO: Add a comment describing what the `position` parameter means for this function.
  //position is our index(where you are in array)
const fibonacci = (position) => {
  // TODO: Add a comment describing the purpose of this conditional statement. 
    //if index is greater than two we can then perform followinng code
  if (position < 2) {
    return position;
  }

  // TODO: Add a comment describing the purpose of this return statement.
    //this returns position parameter value and does math on it
  return fibonacci(position - 1) + fibonacci(position - 2);
};

// TODO: What will this return?
  //this returns the number in the 9th position in the fibonacci sequence as it relates to this function(position < 2)
console.log(fibonacci(9));

//dont flood the call stack with messy recursion, STOP the function calls after work is done