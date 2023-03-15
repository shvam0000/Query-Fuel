const mongoose = require('mongoose');

// const commentSchema = mongoose.Schema({
//   _id: mongoose.Types.ObjectId,
//   comment: { type: String, required: true },
//   createdBy: { type: String, required: true },
//   query: { type: mongoose.Schema.Types.ObjectId, ref: 'Query' },
// });

// const querySchema = mongoose.Schema({
//   _id: mongoose.Types.ObjectId,
//   query: { type: String },
//   createdBy: { type: String },
//   comments: [{ type: mongoose.Types.ObjectId, ref: 'Comment' }],
// });

// module.exports = mongoose.model('Comment', commentSchema);

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
