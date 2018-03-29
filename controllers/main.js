const ask = require('./');

module.exports = (text) => {
  if (text.match(/what would martin do/g)) return 'Martin wouldn\'t do that!';

  if (text.includes('pattern')) {
    return ask.patterns();
  }

  if (text.includes('refactor')) {
    return ask.refactor();
  }

  if (text.includes('answer')) {
    return `Hmmm let me think... ${ask.crystalBall()}`;
  }

  return ask.random();
};
