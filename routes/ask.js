var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  res.json({
    text: 'You asked Martin.'
  });
});

module.exports = router;
