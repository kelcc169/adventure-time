const mongoose = require('mongoose');

const adventureSchema = new mongoose.Schema ({
  name: String,
  locations: [{type: mongoose.Schema.Types.ObjectId, ref: "Location"}],
})

const Adventure = mongoose.model('Adventure', adventureSchema);

module.exports = Adventure;