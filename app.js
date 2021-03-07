'use strict';

require('dotenv').config();

const LoremIpsum = require("lorem-ipsum").LoremIpsum;
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
});

const port = process.env.PORT || 3000;
const homStartingContent = lorem.generateParagraphs(2);
const aboutStartingContent = lorem.generateParagraphs(2);
const contactStartingContent = lorem.generateParagraphs(2);

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        homeStartingContent: homStartingContent,
    });
});

app.get('/about', (req, res) => {
  res.render('about', {
    aboutStartingContent: aboutStartingContent,
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    contactStartingContent: contactStartingContent,
  });
});

app.get('/compose', (req, res) => {
  res.render('compose');
});

app.post('/compose', (req, res) => {
  let post = req.body.postTitle;

  console.log(post);
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});