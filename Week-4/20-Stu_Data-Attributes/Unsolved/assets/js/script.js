var boxEs = document.querySelector(".container");

boxEs.addEventListener("click" , function(event){
  var element = event.target;
  var number = element.getAttribute("data-number");
  var state = element.getAttribute("data-state");

    if(state === "hidden") {
      //maybe change number to visible
      element.dataset.state = "number";
      element.setAttribute("data-state", "number");
        //above are two examples of the same code
      element.setAttribute("class", element.dataset.number);
    
    } else {
      element.dataset.state = "hidden";
      element.setAttribute("class", element.dataset.state);
    }
  });
