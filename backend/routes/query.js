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
            query: doc.query,
            createdBy: doc.createdBy,
            comments: doc.comments.map((comment) => {
              return {
                _id: comment._id,
                comment: comment.comment,
                createdBy: comment.createdBy,
              };
            }),
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

router.post('/', async (req, res, next) => {
  const query = new Query({
    _id: new mongoose.Types.ObjectId(),
    query: req.body.query,
    createdBy: req.body.createdBy,
    comments: req.body.comments,
  });
  await query.save();
  res.status(201).json({
    message: 'Created query successfully',
    createdQuery: {
      _id: query._id,
      query: query.query,
      createdBy: query.createdBy,
      comments: query.comments.map((comment) => {
        return {
          _id: comment._id,
          comment: comment.comment,
          createdBy: comment.createdBy,
        };
      }),
      request: {
        type: 'GET',
        url: 'http://localhost:3000/queries/' + query._id,
      },
    },
  });
});

router.get('/:queryId', async (req, res, next) => {
  const Id = req.params.queryId;
  try {
    const query = await Query.findById(Id);
    if (!query) {
      return res.status(404).json({ message: 'Query not found' });
    }
    res.status(200).json({
      query: query,
      request: {
        type: 'GET',
        url: 'http://localhost:3000/queries',
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
});

router.patch('/:queryId/comments', (req, res, next) => {
  const Id = req.params.queryId;
  Query.updateOne(
    { _id: Id },
    {
      $push: {
        comments: {
          _id: new mongoose.Types.ObjectId(),
          comment: req.body.comment,
          CommentCreatedBy: req.body.createdBy,
        },
      },
    },
    { new: true }
  )
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
