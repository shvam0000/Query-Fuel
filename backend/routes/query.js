const express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router();

const Query = require('../models/query');

router.get('/', (req, res, next) => {
  Query.find()
    .exec()
    .then((docs) => {
      const response = {
        count: docs.length,
        queries: docs.map((doc) => {
          return {
            _id: doc._id,
            title: doc.title,
            query: doc.query,
            createdBy: doc.createdBy,
            request: {
              type: 'GET',
              url: 'http://localhost:3000/queries/' + doc._id,
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
  const query = new Query({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    query: req.body.query,
    createdBy: req.body.createdBy,
  });
  query
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: 'Created query successfully',
        createdQuery: {
          _id: result._id,
          title: result.title,
          query: result.query,
          createdBy: result.createdBy,
          request: {
            type: 'GET',
            url: 'http://localhost:3000/queries/' + result._id,
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
