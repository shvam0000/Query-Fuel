const express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router();

const Contact = require('../models/contact');

router.get('/', (req, res, next) => {
  Contact.find()
    .exec()
    .then((docs) => {
      const response = {
        count: docs.length,
        contacts: docs.map((doc) => {
          return {
            _id: doc._id,
            email: doc.email,
            subject: doc.subject,
            message: doc.message,
            request: {
              type: 'GET',
              url: 'http://localhost:3000/contacts/' + doc._id,
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
  const contact = new Contact({
    _id: new mongoose.Types.ObjectId(),
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message,
  });
  contact
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: 'Created contact successfully',
        createdContact: {
          _id: result._id,
          email: result.email,
          subject: result.subject,
          message: result.message,
          request: {
            type: 'GET',
            url: 'http://localhost:3000/contacts/' + result._id,
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
