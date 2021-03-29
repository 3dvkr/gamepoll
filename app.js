const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const Game = require('./models/game.js')

const PORT = process.env.PORT || 3000


const dbURL = "mongodb+srv://goober:goob@cluster0.sf1vv.mongodb.net/mycooldatabase?retryWrites=true&w=majority"

mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> {
  console.log('we connected to the database')
  app.listen(PORT, () => {console.log('the server is working')});
})
.catch(err => console.log(err))

//middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}))
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
  Game.find()
  .then(result => {

    res.render('index.ejs', {title: 'GAME TIME', games: result });
  })
  .catch(err => console.log(err))
  
})

app.post('/gameSubmit', (req, res) => {
  const game = new Game(req.body);
  game.save()
  .then(() => {
  res.redirect('/')
  })
  .catch(err => console.log(err))
})




