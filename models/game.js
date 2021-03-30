//creating a mongoose schema

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  title: { 
    type: String,
    required: true
   },
   gameType: { type: String,
   required: true
   },
   minPlayers: {
    type: Number,
    required: true,
    default: 2
  },
   maxPlayers: Number,
   votes: {type: Number,
   default: 0}
}, {timestamps: true})

const Game = mongoose.model('Game', gameSchema)
module.exports = Game