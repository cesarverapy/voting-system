const { topics } = require('../models/topic');

module.exports = (app) => {
    app.get('/topics', (req, res) => {
        try {
            res.render('topics', { topics });
        } catch (error) {
            console.error('error obtaining every topic', error);
            res.status(500).send('internal server error');
        }
    });

    app.post('/topics', (req, res) => {
        try {
            const newTopic = { id: Date.now(), name: req.body.name, votes: 0 };
            topics.push(newTopic);
            res.redirect('/topics'); 
        } catch (error) {
            console.error('error creating topic:', error);
            res.status(500).send('internal server error');
        }
    });

    app.put('/topics/:id', (req, res) => {
        try {
            const topic = topics.find(t => t.id === parseInt(req.params.id));
            if (topic) {
                topic.name = req.body.name || topic.name;
                res.sendStatus(200);
            } else {
                res.status(404).send('topic not found');
            }
        } catch (error) {
            console.error('error updating topic:', error);
            res.status(500).send('internal server error');
        }
    });

    app.delete('/topics/:id', (req, res) => {
        try {
            const topicIndex = topics.findIndex(t => t.id === parseInt(req.params.id));
            if (topicIndex !== -1) {
                topics.splice(topicIndex, 1);
                res.sendStatus(200);
            } else {
                res.status(404).send('topic not found');
            }
        } catch (error) {
            console.error('error deleting topic:', error);
            res.status(500).send('internal server error');
        }
    });

    app.post('/topics/:id/vote', (req, res) => {
        try {
            const topic = topics.find(t => t.id === parseInt(req.params.id));
            if (topic) {
                topic.votes += 1;
                topics.sort((a, b) => b.votes - a.votes);
                res.redirect('/topics');
            } else {
                res.status(404).send('topic not found');
            }
        } catch (error) {
            console.error('error voting for this topic:', error);
            res.status(500).send('internal server error');
        }
    });
};
