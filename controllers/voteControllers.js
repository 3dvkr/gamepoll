const Game = require('../models/game');
//vote_index, vote_upvote, vote_downvote


const vote_index = (req, res) => {
  Game.find()
    .then(result => {
      res.render('vote.ejs', { title: 'VOTE FOR GAME', games: result });
    })
    .catch(err => console.log(err));
}

const vote_upvote = async (req, res) => {
  const id = req.params.id;

  const voteData = await Game.findById(id);

  Game.findByIdAndUpdate(
    id,
    { votes: voteData.votes + 1 },
    { useFindAndModify: false }
  ).then(() => {
    res.json({ redirect: '/vote' });
  });
}

const vote_downvote = async (req, res) => {
  const id = req.params.id;

  const voteData = await Game.findById(id);

  Game.findByIdAndUpdate(
    id,
    { votes: voteData.votes - 1 },
    { useFindAndModify: false }
  ).then(() => {
    res.json({ redirect: '/vote' });
  });
}

module.exports = {
  vote_index,
  vote_upvote,
  vote_downvote,
}