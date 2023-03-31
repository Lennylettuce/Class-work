

const a = process.argv[2];
const b = process.argv[3];

if (a === b) {
    console.log(true);
} else {
    console.log(false);
}


// console.log(a=== b ? true : false);
// first is condition you're checking, after ? is what would be output depending on conditions before it
// console.log(a === b); would return a boolean
//if user gives one argument how to deal with that without it breaking the code
//answer: add an if statment
// if (!a||!b){
    //console.log('please add second arg');
    //return;
//}