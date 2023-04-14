const express = require('express');

const PORT = 3001;

const app = express();

app.use(express.json);
// TODO: Create a GET method for `/api/reviews` that logs when a user's request has been received
app.get('/api/reviews', (req, res) => {
  // Your code here
  res.json('your'${req.method} 'request to' ${req.path} 'was recieved!');
  console.log(${req.method})
});

// TODO: Create a POST request for `/api/reviews` that logs when a user's request has been received
// Your code here
app.post('/api/reviews', (req, res) => {
  res.json(console.log({message: 'reviews recieved!'}));
})

// TODO: Create a GET request for `api/upvotes` that logs when a user's request has been received
app.get('/api/upvotes', (req, res) => {
  // Your code here
  res.json(console.log({message: 'upvotes recieved!'}))
});

// TODO: Create a POST request for `api/upvotes` that logs when a user's request has been received
// Your code here
app.post('/api/upvotes', (req, res) => {
  res.json(console.log({message: 'upvotes post recieved!'}));
});

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
