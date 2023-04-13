// TODO: Import express
const express = require('express');

// TODO: Import 'terms.json' file
const file = require('./terms.json');

const app = express();

const PORT = 3001;

//set up route for root path
app.get('/', (req, res) => {
  res.send('Visit /api route to see work')
})

// TODO: Initialize app variable
app.use(express.static('Unsolved'));

// TODO: Create a route for a GET request that will return the content of our `terms.json` file
app.get('/api', (req, res) => {
  res.json(file);
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
