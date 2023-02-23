var site1El = document.querySelector(".site1");
var site2El = document.querySelector(".site2");
var site3El = document.querySelector(".site3");

site1El.children[0].textContent = "Site 1";
site1El.children[1].setAttribute("href", "https://google.com");
site1El.children[1].children[0].setAttribute("src", "assets/images/image_1.jpg");
site1El.children[1].children[0].setAttribute("alt", "man working");
site1El.children[1].children[0].setAttribute("style", "padding:10px;");

site2El.children[0].textContent = "Site 2";
site2El.children[1].setAttribute("href", "https://twitter.com");
site2El.children[1].children[0].setAttribute("src", "assets/images/image_2.jpg");
site2El.children[1].children[0].setAttribute("alt", "group brainstorm");
site2El.children[1].children[0].setAttribute("style", "padding:10px;");

site3El.children[0].textContent = "Site 3";
site3El.children[1].setAttribute("href", "https://instagram.com");
site3El.children[1].children[0].setAttribute("src", "assets/images/image_3.jpg");
site3El.children[1].children[0].setAttribute("alt", "women working");
site3El.children[1].children[0].setAttribute("style", "padding:10px;");

// Write Your Code Below
 //h4 info stored in one variable
 var h4s = document.querySelectorAll("h4");
 var h1s = document.querySelectorAll("h1");
  // make h4 text blue, 30px, bold
 //padding left 10px, margin 0
 h4s[0].setAttribute("style", "color:blue; font-size:30px; font-weight:bold;");
 h4s[1].setAttribute("style", "color:blue; font-size:30px; font-weight:bold;");
 h4s[2].setAttribute("style", "color:blue; font-size:30px; font-weight:bold;");

 h1s[0].setAttribute("style", "padding-left:10px;", "margin:0");

 //use for loop to do multiple commands

 // for(var i = 0; i < h4s.length; i++){
//      h4s[i].setAttribute("style", etc etc..);
 //}
 //that'll make things much quicker