const API_LAYER = "api";
const CONTROLLER_LAYER = "controller";
const DATABASE_LAYER = "database layer";

function Exception(layer, message, code = null) {
  this.layer = layer;
  this.message = message;
  this.raisedAt = new Date().getDate();
  if (code) {
    this.code = code;
  } else {
    this.code = "PokémonAPI";
  }
}

module.exports = {
  Exception,
  API_LAYER,
  CONTROLLER_LAYER,
  DATABASE_LAYER
};
