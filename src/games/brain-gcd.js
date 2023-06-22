import getRandomInt from '../common.js';
import core from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return getGcd(num2, num1 % num2);
};

const gcdGame = () => {
  const num1 = getRandomInt(0, 100);
  const num2 = getRandomInt(0, 100);
  const question = `${num1} ${num2}`;
  const rightAnswer = getGcd(num1, num2).toString();

  return [question, rightAnswer];
};

export default () => core(gcdGame, rule);
