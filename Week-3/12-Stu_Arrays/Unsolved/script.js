// WRITE YOUR CODE HERE

const studentName = ["Mack", "Cheryl", "Andy", "Joel"] ;
   console.log(studentName);
const iterator = studentName.values();
for (const value of iterator) {
    console.log("Welcome to class" + value);
}  
//<-this one displays them individually
if (studentName.values(1)) {
  console.log ("Cheryl" + "is in class")
}


    