const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')

const app = express()

app.use(session({
  secret: '21d8924b-0af0-4252-a44d-d090d6f14ce7',
  resave: false,
  saveUninitialized: false
}))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const index = require('./route/index');
const testRoute = require('./route/testRoute');

app.use('/', index);
app.use('/test', testRoute);

module.exports = app;