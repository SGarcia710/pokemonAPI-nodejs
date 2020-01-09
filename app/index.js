const express = require("express");
const cors = require("cors");

const typesHandler = require("../handlers/typesHandler");

const app = express();
app.use(cors());

app.get("/", (request, response) => {
  response.send("Bienvenido a la PokémonAPI de SGarcia710");
});

app.use("/api/types", typesHandler);

module.exports = app;
