import getRandomInt from '../common.js';
import core from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let divider = 2; divider < Math.ceil(number / 2); divider += 1) {
    if (number % divider === 0) {
      return false;
    }
  }
  return true;
};

const primeGame = () => {
  const number = getRandomInt(2, 100);
  const rightAnswer = isPrime(number) ? 'yes' : 'no';

  return [number, rightAnswer];
};

export default () => core(primeGame, rule);
