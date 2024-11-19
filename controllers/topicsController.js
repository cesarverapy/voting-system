const { topics} = require('../models/topics');

module.exports = (app) => {
    app.get('/topics', (req, res) => {
        res.render('topics', { topics});
    });

    app.post('/topics', (req, res) => {
        const newTopic = { 
            id: Date.now(),
            name: req.body.name,
            votes:0
        };
        topics.push(newTopic);
        res.redirect('topics');
    });

    app.put('/topics/:id', (req, res) => {
        const topic = topics.find( t => t.id === parseInt(req.params.id));
        if (topic) {
            topic.name = req.body.name || topic.name;
            res.sendStatus(200);
        } else {
            res.sendStatus(404);
        }
    });

    app.delete('/topics/:id', (req, res) => {
        const topicIndex = topics.findIndex(t => t.id === parseInt(req.params.id));
        if (topicIndex !== -1) {
            topics.splice(topicIndex, 1);
            res.sendStatus(200);
        } else {
            res.sendStatus(404);
        }
    });

    app.post('/topics/:id/vote', (req, res) => {
        const topics = topics.find (t => t.id === parseInt(req.params.id));
        if (topic) {
            topic.votes += 1;
            topics.sort((a, b) => b.votes - a.votes);
            res.redirect('/topics');
        }   else {
            res.sendStatus(404);
        }
    });
};