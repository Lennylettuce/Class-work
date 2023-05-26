// TODO: Complete the 'counter' function below.
function counter() {
   let count = 0;

   //our object to be returned
   // return ++ count returns the val counted not count then ++
   return {
    increment: funciton() {
        return ++count;
    }
   }
}



module.exports = counter;
