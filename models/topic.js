class Topic {
    constructor(id, name, votes = 0) {
        if (!name || name.trim().length === 0) {
            throw new Error('topic name cannot be empty');
        }
        this.id = id;
        this.name = name;
        this.votes = votes;
    }
}

let topics = [];

const TopicModel = {
    getAll: () => [...topics],

    getById: (id) => topics.find((t) => t.id === id) || null,

    create: (name) => {
        if (topics.some((t) => t.name === name)) {
            throw new Error('topic name already exists');
        }
        const newTopic = new Topic(Date.now(), name);
        topics.push(newTopic);
        return newTopic;
    },

    update: (id, newName) => {
        const topic = topics.find((t) => t.id === id);
        if (!topic) {
            throw new Error('topic not found');
        }
        if (!newName || newName.trim().length === 0) {
            throw new Error('topic name cannot be empty');
        }
        topic.name = newName;
        return topic;
    },

    delete: (id) => {
        const index = topics.findIndex((t) => t.id === id);
        if (index === -1) {
            throw new Error('topic not found');
        }
        return topics.splice(index, 1)[0];
    },

    vote: (id) => {
        const topic = topics.find((t) => t.id === id);
        if (!topic) {
            throw new Error('topic not found');
        }
        topic.votes += 1;
        topics.sort((a, b) => b.votes - a.votes);
        return topic;
    },
};

module.exports = { Topic, TopicModel };
