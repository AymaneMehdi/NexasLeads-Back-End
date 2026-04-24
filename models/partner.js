const mongoose = require('mongoose');

const partnerSchema = new mongoose.Schema({
  link: {type: String, required: true},
  image: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Partner = mongoose.model('Partner', partnerSchema);

module.exports = Partner;