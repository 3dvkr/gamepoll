const Game = require('../models/game');
const Peas = require('../models/peas');

module.exports =  async (req, res) => {
    const game = new Game(req.body);
    if (req.body.peas === 'on') {
      const peaData = await Peas.findById('6062ada1377878ae827faa18');
      Peas.findByIdAndUpdate(
        '6062ada1377878ae827faa18',
        {
          peopleWhoLikePeas: peaData.peopleWhoLikePeas + 1,
        },
        { useFindAndModify: false }
      )
        .then(() => {
          saveGame(game, res);
        })
        .catch(err => {
          console.log(err);
        });
    } else if (req.body.peas !== 'on') {
      const peaData = await Peas.findById('6062ada1377878ae827faa18');
      Peas.findByIdAndUpdate(
        '6062ada1377878ae827faa18',
        {
          peopleWhoDislikePeas: peaData.peopleWhoDislikePeas + 1,
        },
        { useFindAndModify: false }
      )
        .then(() => {
          saveGame(game, res);
        })
        .catch(err => {
          console.log(err);
        });
    }
} 

function saveGame(game, response) {
    game
        .save()
        .then(() => {
        response.redirect('/vote');
        })
        .catch(err => console.log(err));
}