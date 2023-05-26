const grades = [56, 78, 99, 85];

// TODO: Complete the 'findAverage' function below.
function findAverage(accumulator, currentValue, index, array) {
    //add up all values
    //operation to return average of acc values

    if (index + 1 === array.length) {
        //ensures division happens first must return this value on average 
        return (accumulator + currentValue) / array.length;
    }

    //this will keep adding to acc
    return accumulator + currentValue;
}

// TODO: Pass the 'findAverage' into the reduce method.
let gradeAverage = grades.reduce(findAverage);

console.log(gradeAverage);
