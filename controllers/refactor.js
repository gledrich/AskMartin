module.exports = () => {
  const getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line
  };

  const ran = getRandom(1, 6);

  const sw = {
    1: 'When you find you have to add a feature to a program, and the program\'s code is not structured in a convenient way to add the feature, first refactor the program to make it easy to add the feature, then add the feature.',
    2: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    3: 'Refactoring is... a change made to the internal structure of software to make it easier to understand and cheaper to modify without changing the observable behavior of the software.',
    4: 'When you feel the need to write a comment, first try to refactor the code so that any comment becomes superfluous.',
    5: 'The key is to test the areas that you are most worried about going wrong. That way you get the most benefit for your testing effort. It is better to write and run incomplete tests than not to run complete tests',
    6: 'Refactoring is... to restructure software by applying a series of refactorings without changing the observable behavior of the software.',
  };

  return sw[ran];
};

