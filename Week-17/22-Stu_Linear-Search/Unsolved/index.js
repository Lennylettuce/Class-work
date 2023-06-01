const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7];

// TODO: Complete the linearSearch function below.
const linearSearch = (array, element) => {
    for(var i = 0; i < array.length; i++){
        if (array[i] === element) {
            return i;
        }
        //loops through array then stops, place return -1 for items not found in array because
        //that's how the function works, it'll run the return -1 inside loop so place it outside and 
    }  return -1;
};
//has a good runtime for small amounts of data but not a great algerithm for larger sets of data

module.exports = {linearSearch};

//Step 1. Create a function that accepts an array and an element.

//Step 2. Loop through each element in the given array.

//Step 3. Check to see if the index of the array we are looping through is equal to the element.

//Step 4. Return the index of the matching element.

//Step 5. Return negative one if no matching element is found in the array.