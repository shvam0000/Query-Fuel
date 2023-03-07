const mongoose = require('mongoose');

const querySchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  query: { type: String, required: true },
  createdBy: { type: String, required: true },
});

module.exports = mongoose.model('Query', querySchema);
