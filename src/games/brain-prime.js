import getRandomInt from '../common.js';

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

export default primeGame;
