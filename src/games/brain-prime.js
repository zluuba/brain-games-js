const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const isPrime = (number) => {
  for (let divider = 2; divider < Math.ceil(number / 2); divider += 1) {
    if (number % divider === 0) {
        return false;
    }
  }
  return true;
};

const startPrimeGame = () => {
  const number = getRandomInt(0, 100);
  const rightAnswer = isPrime(number) ? 'yes' : 'no';

  return [number, rightAnswer];
};

export { startPrimeGame };
