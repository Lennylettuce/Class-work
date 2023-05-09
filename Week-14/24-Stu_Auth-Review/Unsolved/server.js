const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');

// TODO: Add a comment describing the functionality of this expression
  //connect sequelize session to our express app/database
  //connect this sessions library that allows us access to Store class
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

// TODO: Add a comment describing the functionality of this object
  //stores data about the session-cookie info, sequelize link,
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  //allow express to write session to database
  store: new SequelizeStore({
    //connect db to sequelize here
    db: sequelize
  })
};

// TODO: Add a comment describing the functionality of this statement
  //tell express app to use the session created and the data stored for session
app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
