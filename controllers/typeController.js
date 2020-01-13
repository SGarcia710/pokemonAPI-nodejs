const { Exception } = require("../exception");
const genericDao = require("../daos/genericDao");

const getAllTypes = async () => {
  try {
    let response = await genericDao.getAllTypes();
    return response;
  } catch (exception) {
    throw new Exception(exception.layer, exception.message, exception.code);
  }
};

module.exports = { getAllTypes };
