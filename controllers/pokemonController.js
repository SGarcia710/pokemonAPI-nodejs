const { Exception } = require('../exception');
const genericDao = require('../daos/genericDao');

const getAllPokemonsController = async () => {
  try {
    let response = await genericDao.getAllShSwPokemons();
    return response;
  } catch (exception) {
    throw new Exception(exception.layer, exception.message, exception.code);
  }
};

module.exports = { getAllPokemonsController };
