fetch(
  // Explain each parameter in comments below.
  //below is the hypertext transfer protocol (secure) which is encrypted (secure)data that is transfered online
  //below is specific url with specific request parameter: ?per_page put & sign between each parameter
  //they are like filters for data request responses
  //sort by create date, direction=desc is list is descending order state=open is show issues with state of open
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function (response) {
    return response.json();
    //return the response in way javascript can intereperet
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.
