module.exports = () => {
  const getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line
  };

  const ran = getRandom(1, 3);

  const sw = {
    1: 'Modeling Principle: Models are not right or wrong; they are more or less useful.',
    2: 'It is commonly said that a pattern, however it is written, has four essential parts: a statement of the context where the pattern is useful, the problem that the pattern addresses, the forces that play in forming a solution, and the solution that resolves those forces. ...it supports the definition of a pattern as "a solution to a problem in a context", a definition that [unfortunately] fixes the bounds of the pattern to a single problem-solution pair',
    3: 'The definition I use for pattern is an idea that has been useful in one practical context and will probably be useful in others.',
  };

  return sw[ran];
};

