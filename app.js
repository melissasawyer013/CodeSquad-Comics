require('dotenv').config();
const methodOverride = require('method-override');
const express = require('express');
// const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

// app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.json());

app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());

const routes = require('./routes/index')
app.use('/', routes);

require('./config/connection');

app.listen(PORT, () => console.log(`Server has started and can be see on http://localhost:${PORT}`));