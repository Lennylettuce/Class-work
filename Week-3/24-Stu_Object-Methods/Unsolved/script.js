var chosenPet = "Lulu";

var shelter = {
  dogs: ["Mackie", "Bernice", "Cookie Monster", "Spot"],
  cats: ["Astrid", "Lulu", "Fluffy", "Mouser"],
  apptMessage: function () {
    console.log("Email us at meetafriend@waywardpets.com to make an appointment to meet your new friend.");
  }

};

//Debug the code below
//i did the shelter.apptmessage debug correct before walkthru, got 1/2 done
function dogMessage() {
  console.log("Congrats! " + chosenPet.Spot + ", a great dog, is available for adoptions!");
  shelter.apptMessage();
}

function catMessage() {
  console.log("Congrats! " + chosenPet + ", an awesome cat, is available for adoption!");
  shelter.apptMessage();
}
//add shelter. before dogs, call where dogs is of left undefined
if (shelter.dogs.includes(chosenPet)) {
  dogMessage();
} else if (shelter.cats.includes(chosenPet)) {
  catMessage();
} else {
  console.log("It looks like the pet is not available.");
  console.log("Check out our featured dog, " + shelter[0] + ". or our featured cat, " + cat.shelter[1]);
}