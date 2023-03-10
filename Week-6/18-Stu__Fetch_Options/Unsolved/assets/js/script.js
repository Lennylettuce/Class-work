fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5', {
  method: 'GET', //get is default
  mode: 'cors',
  cache: 'reload',
  credentials: 'same-origin',
}
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

  // fetch has documentation too, check that out sometime soon!
  //authenticate request by passing info in thru an object
  //send it an auth header in side object
  //headers:{
    //authentication: "...."}
    //inside fetch request, behind url with comma
  