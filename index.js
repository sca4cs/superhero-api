const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const cors = require('cors');
require('dotenv').config();

const dbEngine = process.env.DB || 'development';
const dbConfig = require('./knexfile')[dbEngine];
const db = knex(dbConfig);
const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors({ origin: "*" }));

server.get('/', (req, res) => {
    res.status(200).send("Welcome to the superhero API -- Search for heroes by name, power, and comic universe");
})

server.get('/heroes', (req, res) => {
    db('heroes')
    .then(heroes => {
        res.status(200).json(heroes)
    })
    .catch(err => res.status(500).json(err));
})

server.get('/heroes/:name', (req, res) => {
    const name = req.params.name.toLowerCase();
    db('heroes').where(db.raw('LOWER(REPLACE(REPLACE("name", " ", ""), "-", ""))'), name)
    .then(heroes => {
        if (heroes.length === 0) {
        res.status(404).json({ message: "The requested hero does not exist in the database." });
        } else 
        res.status(200).json(heroes);
    })
    .catch(err => res.status(500).json(err));
})

server.get('/power/:power', (req, res) => {
    const power = req.params.power.toLowerCase();
    db('heroes').where('power', 'like', `%${power}%`)
    .then(heroes => {
        if (heroes.length === 0) {
        res.status(404).json({ message: "The requested power does not exist in the database." });
        } else 
        res.status(200).json(heroes);
    })
    .catch(err => res.status(500).json(err));
})

server.get('/universe/:universe', (req, res) => {
    const universe = req.params.universe.toLowerCase();
    db('heroes').where(db.raw('LOWER("universe")'), universe )
    .then(heroes => {
        if (heroes.length === 0) {
        res.status(404).json({ message: "The requested universe does not exist in the database." });
        } else 
        res.status(200).json(heroes);
    })
    .catch(err => res.status(500).json(err));
})


const port = process.env.PORT || 8000;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});