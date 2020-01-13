const express = require('express');
const cors = require('cors');

const typeHandler = require('../handlers/typeHandler');
const pokemonHandler = require('../handlers/pokemonHandler');

const app = express();
app.use(cors());

app.get('/', (request, response) => {
  response.send('Bienvenido a la PokémonAPI de SGarcia710');
});

app.use('/api/type', typeHandler);
app.use('/api/pokemon', pokemonHandler);

module.exports = app;
