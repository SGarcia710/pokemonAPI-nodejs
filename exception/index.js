const API_LAYER = "api";
const CONTROLLER_LAYER = "controller";
const DAO_LAYER = "dao";
const DATABASE_LAYER = "database layer";
const AUTH_LAYER = "auth layer";
const PROJECTS_CONTROLLER_LAYER = "projects controller layer";
const USERS_CONTROLLER_LAYER = "users controller layer";
const CALCULATION_CONTROLLER_LAYER = "calculation controller layer";

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
  AUTH_LAYER,
  PROJECTS_CONTROLLER_LAYER,
  CONTROLLER_LAYER,
  DAO_LAYER,
  DATABASE_LAYER,
  USERS_CONTROLLER_LAYER,
  CALCULATION_CONTROLLER_LAYER
};
