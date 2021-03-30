const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const peaSchema = new Schema({
  peopleWhoLikePeas: Number,
  peopleWhoDislikePeas: Number,
})


const Peas = mongoose.model('Peas', peaSchema)
module.exports = Peas