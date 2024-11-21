const { TopicModel } = require('../models/topic');

const getAllTopics = (req, res) => {
    try {
        const topics = TopicModel.getAll();
        res.render('topics', { topics });
    } catch (error) {
        console.error('Error retrieving topics:', error.message);
        res.status(500).send('Internal server error');
    }
};

const postTopic = (req, res) => {
    try {
        const newTopic = TopicModel.create(req.body.name);
        res.status(201).json(newTopic);
    } catch (error) {
        console.error('Error creating topic:', error.message);
        res.status(400).send(error.message);
    }
};

const voteATopic = (req, res) => {
    try {
        const topic = TopicModel.vote(parseInt(req.params.id));
        res.redirect('/');
    } catch (error) {
        console.error('Error voting for topic:', error.message);
        res.status(400).send(error.message);
    }
};

const deleteATopic = (req, res) => {
    try {
        TopicModel.delete(parseInt(req.params.id));
        res.sendStatus(200);
    } catch (error) {
        console.error('Error deleting topic:', error.message);
        res.status(400).send(error.message);
    }
};

const editTopic = (req, res) => {
    try {
        const updatedTopic = TopicModel.update(parseInt(req.params.id), req.body.name);
        res.status(200).json(updatedTopic);
    } catch (error) {
        console.error('Error updating topic:', error.message);
        res.status(400).send(error.message);
    }
};

module.exports = { getAllTopics, postTopic, voteATopic, deleteATopic, editTopic };
