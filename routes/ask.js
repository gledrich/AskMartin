const express = require('express');

const ask = require('../controllers/main');

const router = express.Router();


router.post('/', (req, res, next) => {
  const { text } = req.body;

  res.json({
    text: ask(text),
  });
});

module.exports = router;
