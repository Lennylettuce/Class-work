const http = require('http');

// TODO: What does this function return?
  //returns a random trivia question via the call to url
const asyncRequest = (url) =>
  new Promise((resolve, reject) => {
    let error;
    let rawData = '';

    // Use the http.get method to send an asynchronous request to an api at the given url.
    http
      .get(url, (res) => {
        // Check for an error code (not equal to 200)
        if (res.statusCode !== 200) {
          // Creates an error object representing the failed http request
          error = new Error(`Request Failed.\nStatus Code: ${res.statusCode}`);
          res.resume();
          return;
        }

        res.setEncoding('utf8');
        res.on('data', (chunk) => {
          rawData += chunk;
        });
      })
      .on('error', (e) => {
        reject(e);
      })
      .on('close', () => {
        // The 'close' event fires after the incoming message is completely received. Error will be undefined if the
        // response status code was 200.
        if (error) {
          // TODO: What the following line do?
            //tells that the error is the rejectable data(error data)
          reject(error);
        } else {
          // TODO: What does the following line do?
            //tell what to do with usable data
          resolve(rawData);
        }
      });
  });

asyncRequest('http://numbersapi.com/random/trivia')
  // TODO: When is the callback function passed to .then() called by the promise?
    //.on has data as first item to look for
  .then((data) => console.log(data))
  // TODO: When is the callback function passed to .catch() called by the promise? 
    //in .get method names error as readable error message 
  .catch((error) => console.log(error));
