const express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router();

const Announcement = require('../models/announcement');

router.get('/', (req, res, next) => {
  Announcement.find()
    .exec()
    .then((docs) => {
      const response = {
        count: docs.length,
        announcements: docs.map((doc) => {
          return {
            _id: doc._id,
            announcement: doc.announcement,
            nickName: doc.nickName,
            imageUrl: doc.imageUrl,
            request: {
              type: 'GET',
              url: 'http://localhost:3000/announcements/' + doc._id,
            },
          };
        }),
      };
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.post('/', (req, res, next) => {
  const announcement = new Announcement({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    announcement: req.body.announcement,
    nickName: req.body.nickName,
    imageUrl: req.body.imageUrl,
  });
  announcement
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: 'Created announcement successfully',
        createdAnnouncement: {
          _id: result._id,
          title: result.title,
          announcement: result.announcement,
          nickName: result.nickName,
          imageUrl: result.imageUrl,
          request: {
            type: 'GET',
            url: 'http://localhost:3000/announcements/' + result._id,
          },
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
