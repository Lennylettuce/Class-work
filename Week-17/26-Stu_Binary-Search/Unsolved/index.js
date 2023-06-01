const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO: Why is the 'binarySearch' function not running properly??
function binarySearch(array, element) {
  let start = 0;
  let end = array.length - 1;
//get midpoint
  while (start <= end) {
    //math.floor rounds down
    let mid = Math.floor((start + end) / 2);

    if (array[mid] === element) {
      //add true
      return true;
      //if less than element move midpoint (start=mid+1)
    } else if (array[mid] < element) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  //add false
  return false;
}

console.log(binarySearch(arr, 7));

module.exports = binarySearch;
