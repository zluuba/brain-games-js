const getRandomInt = () => {
  const maxNumber = 100;
  return Math.floor(Math.random() * maxNumber);
};

const getGcd = (num1, num2) => {
  if (num1 < num2) {
    [num1, num2] = [num2, num1];
  }
  while (num2 !== 0) {
    [num1, num2] = [num2, num1 % num2];
  }
  return num1;
};

const startGcdGame = () => {
  const num1 = getRandomInt();
  const num2 = getRandomInt();
  const question = `${num1} ${num2}`;
  const rightAnswer = getGcd(num1, num2).toString();
  return [question, rightAnswer];
};

export { startGcdGame };
