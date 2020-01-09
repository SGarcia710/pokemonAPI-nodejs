const Pokedex = require("pokeapi-js-wrapper");

const config = require("../assets/config");

const options = {
  protocol: "http",
  // hostName: `${config.DOMAIN}:${config.PORT}`,
  hostName: "localhost:4001",
  versionPath: "/api/v2/",
  cache: true,
  timeout: 5 * 1000 // 5s
};

const PokeAPI = new Pokedex.Pokedex(options);

module.exports = {
  PokeAPI
};
