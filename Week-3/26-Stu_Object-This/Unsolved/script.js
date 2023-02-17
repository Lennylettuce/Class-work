// TODO: What does 'this' refer to?
// 'this' refers to object executing current code/function
//the console.log of 'this' lists windows char/elements
//using 'this.' inside of an object references the whole object itself, not windows.
//when using 'this.' OUTSIDE of an object it references global windows.
//when using 'this.'INSIDE object to refence object, flexible to variable changes.
console.log(this);

// TODO: What does 'this' refer to?
// 'this' global object refers to object in current code/function
function helloThis() { 
   console.log("Inside this function, this is " + this); 
   }

// TODO: What will this log? 
// this will log 20
var child = { 
   age: 10,
   ageTenYears: function() {
       console.log(this.age + 10); 
   }
};

// TODO: What will this log? 
// console.log is calling initialInvestment and multiplying by 1.15 making 5,750 print
var investor = {  
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15)
    }
   }   
};

// TODO: After commenting, check your results!
//woohoo got this!
helloThis();

// TODO: After commenting, check your results!
// list below to print function
child.ageTenYears();
investor.investment.investmentGrowth();
