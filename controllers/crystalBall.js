module.exports = () => {
  const getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line
  };

  const ran = getRandom(1, 5);

  switch (ran) {
    case 1:
      return 'Random 1';
    case 2:
      return 'Random 2';
    case 3:
      return 'Random 3';
    case 4:
      return 'Random 4';
    case 5:
      return 'Random 5';
    default:
      return 'Default';
  }
};

