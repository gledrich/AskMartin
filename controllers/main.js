const ask = require('./');

module.exports = (text) => {
  if (text.match(/what would martin do/g)) return 'Martin wouldn\'t do that!';

  if (text.match(/pattern/g)) {
    return ask.patterns();
  }

  if (text.match(/refactor/g)) {
    return ask.refactor();
  }

  if (text.match(/answer/g)) {
    return `Hmmm let me think... ${ask.crystalBall()}`;
  }

  return ask.random();
};
