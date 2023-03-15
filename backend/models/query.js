const mongoose = require('mongoose');

const querySchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  query: { type: String, required: true },
  createdBy: { type: String, required: true },
  comments: [
    {
      _id: mongoose.Types.ObjectId,
      comment: { type: String },
      createdBy: { type: String },
    },
  ],
});

module.exports = mongoose.model('Query', querySchema);
