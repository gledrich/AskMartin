module.exports = () => {
  const getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line
  };

  const ran = getRandom(1, 5);

  const sw = {
    1: "...if you're afraid to change something it is clearly poorly designed. ",
    2: "One of the things I've been trying to do is look for simpler or rules underpinning good or bad design. I think one of the most valuable rules is avoid duplication. \"Once and only once\" is the Extreme Programming phrase.",
    3: 'I can’t choose whether someone is offended by my actions. I can choose whether I care.',
    4: 'When you feel the need to write a comment, first try to refactor the code so that any comment becomes superflouus.',
    5: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  };

  return sw[ran];
};

