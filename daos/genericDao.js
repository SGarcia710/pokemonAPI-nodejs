const database = require("../data");
const { Exception } = require("../exception");

const getAllTypes = async () => {
  console.log("entro al dao");
  try {
    // const response = await database.PokeAPI.getTypesList();
    const response = await database.PokeAPI.getPokemonByName("golduck");
    // console.log(golduck);
    return response;
  } catch (exception) {
    throw new Exception(exception.layer, exception.message);
  }
  return;
};

module.exports = {
  getAllTypes
};
