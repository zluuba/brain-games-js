import getRandomInt from '../common.js';
import core from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const evenGame = () => {
  const number = getRandomInt(0, 100);
  const rightAnswer = isEven(number) ? 'yes' : 'no';

  return [number, rightAnswer];
};

export default () => core(evenGame, rule);
