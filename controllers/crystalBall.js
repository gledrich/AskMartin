module.exports = () => {
  const getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line
  };

  const ran = getRandom(1, 5);

  const sw = {
    1: 'Follow your code',
    2: 'Always',
    3: 'I can\'t decide the future for you',
    4: 'That\'s a bad one',
    5: 'That\'s a good one',
  };


  return sw[ran];
};

