// returns the average value of an array of numbers

function avg(array) {

  function sum() {
    let total = 0;
    for(let i = 0; i < array.length; i++) {
      total += array[i];
    }
    //run this and give back the value each time
    return total;
  }
  //total was local to sum so avg couldn't see it
  //
  return sum()/array.length;
}

module.exports = avg;
