import getRandomInt from '../common.js';

const startEvenGame = () => {
  const currNum = getRandomInt(0, 100);
  const rightAnswer = currNum % 2 === 0 ? 'yes' : 'no';

  return [currNum, rightAnswer];
};

export default startEvenGame;
