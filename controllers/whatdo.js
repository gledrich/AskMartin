module.exports = () => {
  const getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line
  };

  const ran = getRandom(1, 2);

  const sw = {
    1: 'Martin would not do that!',
    2: 'Martin would do that!',
  };


  return sw[ran];
};

