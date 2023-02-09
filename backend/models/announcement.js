const mongoose = require('mongoose');

const announcementSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  title: { type: String, required: true },
  announcement: { type: String, required: true },
});

module.exports = mongoose.model('Announcement', announcementSchema);
