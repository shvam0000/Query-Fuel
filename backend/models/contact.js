const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
});

module.exports = mongoose.model('Contact', contactSchema);
