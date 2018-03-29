const express = require('express');
const request = require('request');

const ask = require('../controllers/main');

const router = express.Router();


router.post('/', (req, res, next) => {
  console.log('Martin heard something', req.body.event.text);
  if (req.body.event.text.includes('martin')) {
    const responseText = JSON.stringify(ask(req.body.event.text));
    const username = 'AskMartin';
    const channel = 'rewards-prv';

    request(`https://slack.com/api/chat.postMessage?token=${process.env.TOKEN}&channel=%23${channel}&text=${responseText}&username=${username}&pretty=1`, (err, res, body) => {
      if (err) throw err;

      return body;
    });
  }
  res.send(req.body.challenge);
});

module.exports = router;
