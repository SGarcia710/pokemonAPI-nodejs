const express = require('express');
const router = express.Router();

const typeController = require('../controllers/typeController');

router.get('/', async (request, response) => {
  try {
    let resp = await typeController.getAllTypes();
    response.status(200).json(resp);
  } catch (error) {
    response.status(400).json({ message: error.message, code: error.code });
  }
});

module.exports = router;
