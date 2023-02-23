var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Jax.";
favoriteEl.textContent = "My favorite activities are:";
li1.textContent = "I love to run and play";
li2.textContent = "I bring my family mice";
li3.textContent = "I love to play with my siblings";
li4.textContent = "I'm fuzzy and adorable!";

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);
// Append ordered list 
document.body.appendChild(listEl);
//use listEl.appendChild(li1), etc to list here specifically defined in document already, keep things inside or 
//in order/in relationship to what they're coming from
document.body.appendChild(li1);
document.body.appendChild(li2);
document.body.appendChild(li3);
document.body.appendChild(li4);



h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "http://placekitten.com/200/300");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");

listEl.setAttribute("style", "background-color:#333333;padding:20px;");
li1.setAttribute("style", "color:white; background: #666666; padding:5px; margin-left: 35px;");
li2.setAttribute("style", "color:white; background: #666665; padding:5px; margin-left: 35px;");
li3.setAttribute("style", "color:white; background: #666664; padding:5px; margin-left: 35px;");
li4.setAttribute("style", "color:white; background: #666663; padding:5px; margin-left: 35px;");



// TODO: Add ordered list items containing four favorite foods
//It's done when an ordered list containing four favorite foods is visible in the HTML below the text "My favorite foods are:"

//* It's done when the ordered list has a background color of `#333333` and padding of `20px`.

//* It's done when each list item has a font color of `white`, padding of `5px`, and `margin-left` of `35px`.

//* It's done when each list item has a different background color.
