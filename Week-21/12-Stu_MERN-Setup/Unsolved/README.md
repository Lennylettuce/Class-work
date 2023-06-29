# Add Comments to Implementation of the MERN-stack Architecture

## Root-level Functionality

* TODO: Explain what each script does in the root-level `package.json` file:
* scripts tells the app what commands do what/ concurrently included in develop tells the app to
* go into the server file, run npm run watch while also moving into the client and running npm start for the server
* list of commands to run the application *

```json
"scripts": {
  "start": "node server/server.js",
  "develop": "concurrently \"cd server && npm run watch\" \"cd client && npm start\"",
  "install": "cd server && npm i && cd ../client && npm i",
  "seed": "cd server && npm run seed",
  "build": "cd client && npm run build"
},
```

## Client-side Functionality

* TODO: Explain what this script does in the client-side `client/package.json` file:
* proxy in the client package.json file tells the server side that the localhost port is available to use
* tells the application this port is running and it needs to know to use it

```json
"proxy": "http://localhost:3001",
```

## Server-side Functionality
* TODO: Add a comment describing the functionality of this block of code in `server/server.js`:
* if node process environment is equal to 'production' express app use static path 
* production environment is a real-time setting where the latest versions of software, products, or updates are pushed into live usable
* operation for the intended end users. starts off build for client side (front end)

```js
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}
```

* TODO: Add a comment describing the functionality of this route in `server/server.js`:
* this tells express app to join file path with directoryname of '../blah'
* serve the index.html at the root dir for our homepage/first path in localhost3001/

```js
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
```
