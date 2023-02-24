// TODO: Which element is the following line of code selecting?
  //using query selector to grab box that has the carousel images inside it, gotta call it to make it do stuff
var carousel = document.querySelector(".carouselbox");
// TODO: Which element is the following line of     code selecting?
  //.next and .prev are the different buttons for ^that div
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;

var images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203"
];

carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1; 
  } else if (index > images.length - 1) { 
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// TODO: Describe the functionality of the following event listener.
  //this one calls for the carousel box to execute this function when it's clicked on
carousel.addEventListener("click", function() {
  window.location.href = images[index];
});

// TODO: Describe the functionality of the following event listener.
  //listens for the click event to run the following function
next.addEventListener("click", function(event) {
  // TODO: What is the purpose of the following line of code?
    //stopPropagation calls for the event to end 
  event.stopPropagation();

  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
  //
prev.addEventListener("click", function(event) {
    // TODO: What would happen if we didn't add the following line of code?
      //
  event.stopPropagation();

  navigate(-1);
});

navigate(0);


//EVENT BUBBLING-- when you select thru the dom tree-parent/child
//relthe more layers you go through
//means that

//event stop propogation turns event bubbling\
//bubbling is good when you have elements nested inside
//eachother and you want all of them to function independently
//stop prop makes sure only one of elements/selected element 