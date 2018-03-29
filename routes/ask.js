const express = require('express');

const crystalBall = require('../controllers/crystalBall');

const router = express.Router();


router.post('/', (req, res, next) => {
  const { text } = req.body;

  if (text.includes('crystal')) {
    return res.json({
      text: crystalBall(),
    });
  }

  res.json({
    text: 'You asked Martin a question.',
  });
});

module.exports = router;
