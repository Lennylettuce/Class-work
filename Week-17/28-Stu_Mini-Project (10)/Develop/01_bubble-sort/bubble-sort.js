// Create our input data
const unsortedInputArray = [];

// seed data in unsortedInputArray
for (let i = 0; i < 2000; i++) {
  unsortedInputArray.push(Math.round(Math.random() * 2000));
}

// TODO: create bubble sort function
const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j +1]) {
        const tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }

  return array;
};

const sorted = bubbleSort(unsortedInputArray);
console.log('Post Sort:', sorted.join(' '));
console.log('DONE!');

//their example did kind of a reverse of this pseudocode 

// Create our input data
//


//procedure bubbleSort(A : list of sortable items)
    //n := length(A)
   // repeat
    //    swapped := false
    //    for i := 1 to n - 1 inclusive do
    //        if A[i - 1] > A[i] then
    //            swap(A[i - 1], A[i])
    //            swapped := true
    //        end if
    //    end for
   //     n := n - 1
  //  until not swapped
//end procedure