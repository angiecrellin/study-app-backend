const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Card = require('./models/flashcards')

mongoose.connect('mongodb://angiecrellin:Cal92683@ds127998.mlab.com:27998/flashcardsapp')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const port = 8080

app.post('/create-card', (req, res) => {
    let card = new Card()
    card.term = 'HTML'
    card.definition = 'HyperText Markup Language'
    card.save(err => {
      if (err)
          res.send(err)
          res.json({ msg:'saved'})

  })
})

app.get('/cards', (req, res) => {
  Card.find((err, cards) => {
          if (err)
              res.send(err);

          res.json(cards);
      })
})


app.listen(process.env.PORT || port, () => {
  console.log('server is listening woohoo')
});
