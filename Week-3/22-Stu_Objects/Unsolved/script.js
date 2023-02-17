//WRITE YOUR CODE BELOW


var customerDrink = {
    drink: "coffee",
    sugar: 2,
    orderStatus: true,
};



console.log(customerDrink.sugar);

console.log(customerDrink.drink);

if (customerDrink.orderStatus) {
    console.log("Ready for pickup!" + customerDrink.drink + customerDrink.sugar)
} else{
    console.log("Still in queue")
}


//if(orderStatus === true){
    console.log("Ready to pickup!");
//} else if (orderStatus< true) {
    console.log("Order in queue");
//}