const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
// Initializes Sequelize with session store
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const { strict } = require('assert');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// Sets up session and connect to our Sequelize db
const sess = {
  secret: 'Super secret secret',
  // TODO: Add a comment describing the purpose of adding a cookies object to our options to our session object
    //so data can be stored in browser as well as db thru browser? written to client
  cookie: {
    // TODO: Add a comment describing the functionality of the maxAge attribute
      //timeout for cookie/session 
    maxAge: 60 * 60 * 1000,
    // TODO: Add a comment describing the functionality of the httpOnly attribute
      //route boolen value (default) *prevents front end javascript from reading cookie* prevent cross-site scripting hacks!!!!
    httpOnly: true,
    // TODO: Add a comment describing the functionality of the secure attribute
      //require an http(s!) connection to serve/store cookies (false for local host!)
    secure: false,
    // TODO: Add a comment describing the functionality of the sameSite attribute
      //strict setting means the cookie will only be sent along with samesite requests (NEED MATCHING DOMAINS FOR COOKIE REQ)
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  // Sets up session store
    //this code connects our session to the DB to write in data from session
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(
      `\nServer running on port ${PORT}. Visit http://localhost:${PORT} and create an account!`
    )
  );
});
