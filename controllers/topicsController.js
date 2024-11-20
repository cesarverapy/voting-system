const { topics } = require('../models/topic'); // Importa el modelo de datos

module.exports = (app) => {
    // Obtener todos los temas
    app.get('/topics', (req, res) => {
        try {
            res.render('topics', { topics }); // Renderiza la lista de temas en la vista
        } catch (error) {
            console.error('Error al obtener los temas:', error);
            res.status(500).send('Error interno del servidor');
        }
    });

    // Crear un nuevo tema
    app.post('/topics', (req, res) => {
        try {
            const newTopic = { id: Date.now(), name: req.body.name, votes: 0 };
            topics.push(newTopic); // Añade el nuevo tema al arreglo
            res.redirect('/topics'); // Redirecciona a la lista de temas
        } catch (error) {
            console.error('Error al crear el tema:', error);
            res.status(500).send('Error interno del servidor');
        }
    });

    // Actualizar un tema existente
    app.put('/topics/:id', (req, res) => {
        try {
            const topic = topics.find(t => t.id === parseInt(req.params.id));
            if (topic) {
                topic.name = req.body.name || topic.name; // Actualiza el nombre si se proporciona
                res.sendStatus(200); // Responde con éxito
            } else {
                res.status(404).send('Tema no encontrado'); // Error si no se encuentra el tema
            }
        } catch (error) {
            console.error('Error al actualizar el tema:', error);
            res.status(500).send('Error interno del servidor');
        }
    });

    // Eliminar un tema existente
    app.delete('/topics/:id', (req, res) => {
        try {
            const topicIndex = topics.findIndex(t => t.id === parseInt(req.params.id));
            if (topicIndex !== -1) {
                topics.splice(topicIndex, 1); // Elimina el tema del arreglo
                res.sendStatus(200); // Responde con éxito
            } else {
                res.status(404).send('Tema no encontrado'); // Error si no se encuentra el tema
            }
        } catch (error) {
            console.error('Error al eliminar el tema:', error);
            res.status(500).send('Error interno del servidor');
        }
    });

    // Votar por un tema y reordenar la lista según los votos
    app.post('/topics/:id/vote', (req, res) => {
        try {
            const topic = topics.find(t => t.id === parseInt(req.params.id));
            if (topic) {
                topic.votes += 1; // Incrementa el contador de votos
                topics.sort((a, b) => b.votes - a.votes); // Reordena los temas según los votos
                res.redirect('/topics'); // Redirecciona a la lista de temas
            } else {
                res.status(404).send('Tema no encontrado'); // Error si no se encuentra el tema
            }
        } catch (error) {
            console.error('Error al votar por el tema:', error);
            res.status(500).send('Error interno del servidor');
        }
    });
};
