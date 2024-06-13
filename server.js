const path = require('path');
const express = require("express");
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

require('dotenv').config()
// Added secret variable for sess object
const sess = {
  secret: process.env.SESS_SECRET,
  cookie: {
    maxAge: 60 * 60 * 1_000,
    httpOnly: true,
    secure: false,
    sameSite: false,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));



app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(routes);

//When we know that we are done with the models change to force false
console.log("MAKE SURE TO CHANGE TO FORCE TRUE AND IN RENDER GET RID OF NPM ")
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

