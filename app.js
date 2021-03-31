const express = require('express');
const app = express();
const anotherApp = express();
const path = require('path');
const mongoose = require('mongoose');
const Game = require('./models/game');
const Peas = require('./models/peas');

const voteRoutes = require('./routes/voteRoutes.js')
const gameSubmitRoutes = require('./routes/gameSubmitRoutes.js')

const PORT = process.env.PORT || 3000;

const dbURL =
  'mongodb+srv://goober:goob@cluster0.sf1vv.mongodb.net/mycooldatabase?retryWrites=true&w=majority';



mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('we connected to the database');
    app.listen(PORT, () => {
      console.log('the server is working');
    });
  })
  .catch(err => console.log(err));

//middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
  // console.log(req)
const gameList = await Game.find()

let maxVote = 0;
  for (let result of gameList) {
    if (result.votes > maxVote) {
      maxVote = result.votes;
    }
  }
  const winners = gameList.filter(el => el.votes >= maxVote);
  const peaData = await Peas.findOne();

  res.render('index.ejs', { title: 'HOME', games: gameList, winners: winners, peaStuff: peaData});
});

app.use('/vote', voteRoutes);
app.use('/gameSubmit', gameSubmitRoutes);

app.get('/add', (req, res) => {
  res.render('add.ejs', { title: 'ADD A GAME' });
});

