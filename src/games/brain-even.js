import getRandomInt from '../common.js';
import core from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenGame = () => {
  const currNum = getRandomInt(0, 100);
  const rightAnswer = currNum % 2 === 0 ? 'yes' : 'no';

  return [currNum, rightAnswer];
};

export default () => core(evenGame, rule);
