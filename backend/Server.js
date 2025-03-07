const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

let entities = [];

app.get('/ping', (req, res) => {
    res.send('PONG');
});

app.get('/entities', (req, res) => {
    res.json(entities);
});

app.post('/entities', (req, res) => {
    const entity = {
        id: entities.length + 1,
        name: req.body.name
    };
    entities.push(entity);
    res.status(201).json(entity);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});