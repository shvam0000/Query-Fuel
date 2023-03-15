const express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router();

const Query = require('../models/query');

// router.post('/', (req, res, next) => {
//   const query = new Query({
//     _id: new mongoose.Types.ObjectId(),
//     title: req.body.title,
//     query: req.body.query,
//     createdBy: req.body.createdBy,
//   });
//   query
//     .save()
//     .then((result) => {
//       console.log(result);
//       res.status(201).json({
//         message: 'Created query successfully',
//         createdQuery: {
//           _id: result._id,
//           title: result.title,
//           query: result.query,
//           createdBy: result.createdBy,
//           request: {
//             type: 'GET',
//             url: 'http://localhost:3000/queries/' + result._id,
//           },
//         },
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({
//         error: err,
//       });
//     });
// });

// router.get('/:queryId', (req, res, next) => {
//   const id = req.params.queryId;
//   Query.findById(id)
//     .exec()
//     .then((doc) => {
//       console.log('From database', doc);
//       if (doc) {
//         res.status(200).json({
//           query: doc,
//           request: {
//             type: 'GET',
//             url: 'http://localhost:3000/queries',
//           },
//         });
//       } else {
//         res
//           .status(404)
//           .json({ message: 'No valid entry found for provided ID' });
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({ error: err });
//     });
// });

// router.post('/:queryId/comments', async (req, res, next) => {
//   console.log('hehe');
//   const Id = req.params.queryId;
//   console.log(Id);

//   try {
//     const query = await Query.findById(Id.toString());
//     if (!query) {
//       return res.status(404).json({ message: 'Query not found' });
//     }
//     const comment = new Comment({
//       _id: new mongoose.Types.ObjectId(),
//       comment: req.body.comment,
//       createdBy: req.body.createdBy,
//     });
//     query.comments.push(comment);
//     await query.save();
//     await comment.save();
//     res.status(201).json({
//       message: 'Created comment successfully',
//       createdComment: {
//         _id: comment._id,
//         comment: comment.comment,
//         createdBy: comment.createdBy,
//         request: {
//           type: 'GET',
//           url:
//             'http://localhost:3000/queries/' +
//             query._id +
//             '/comments/' +
//             comment._id,
//         },
//       },
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({
//       error: err,
//     });
//   }
// });

// router.get('/:queryId/comments', async (req, res, next) => {
//   const Id = req.params.queryId;
//   try {
//     const query = await Query.findById(Id);
//     if (!query) {
//       return res.status(404).json({ message: 'Query not found' });
//     }
//     const comments = await Comment.find({ _id: { $in: query.comments } });
//     res.status(200).json({
//       comments: comments,
//       request: {
//         type: 'GET',
//         url: 'http://localhost:3000/queries/' + query._id + '/comments',
//       },
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({
//       error: err,
//     });
//   }
// });

// router.get('/:queryId/comments/:commentId', async (req, res, next) => {
//   const Id = req.params.queryId;
//   const commentId = req.params.commentId;
//   try {
//     const query = await Query.findById(Id);
//     if (!query) {
//       return res.status(404).json({ message: 'Query not found' });
//     }
//     const comment = await Comment.findById(commentId);
//     if (!comment) {
//       return res.status(404).json({ message: 'Comment not found' });
//     }
//     res.status(200).json({
//       comment: comment,
//       request: {
//         type: 'GET',
//         url: 'http://localhost:3000/queries/' + query._id + '/comments',
//       },
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({
//       error: err,
//     });
//   }
// });

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

//post a query with comments
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

//get one query with comments
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

//update a query
router.patch('/:queryId', (req, res, next) => {
  const id = req.params.queryId;
  Query.updateOne({ _id: id }, { $set: req.body })
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

//! TODO: update a comment
//push another comment to a query
router.patch('/:queryId/comments', (req, res, next) => {
  const Id = req.params.queryId;
  Query.updateOne(
    { _id: Id },
    {
      $push: {
        _id: new mongoose.Types.ObjectId(),
        comment: req.body.comment,
        createdBy: req.body.createdBy,
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
