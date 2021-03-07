'use strict';

require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const port = process.env.PORT || 3000;
const homStartingContent = '';
const aboutContent = '';
const contactContent = '';

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});