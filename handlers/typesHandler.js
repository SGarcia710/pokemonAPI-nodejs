const express = require("express");
const router = express.Router();
const typesController = require("../controllers/typesController");

router.get("/", async (request, response) => {
  try {
    let resp = await typesController.getAllTypes();
    response.status(200).json(resp);
  } catch (error) {
    response.status(400).json({ message: error.message, code: error.code });
  }
});

module.exports = router;
