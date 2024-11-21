const express = require('express');
const router = express.Router();
const { getAllTopics, postTopic, voteATopic, deleteATopic, editTopic } = require('../controllers/topicsController');

router.get('/', getAllTopics);
router.post('/topics', postTopic);
router.post('/topics/:id/votes', voteATopic);
router.delete('/topics/:id', deleteATopic);
router.put('/topics/:id', editTopic);


module.exports = router;
