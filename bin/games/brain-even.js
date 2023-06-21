const getRandomInt = () => {
    const maxNumber = 100;
    return Math.floor(Math.random() * maxNumber);
  };

const startEvenGame = () => {
  const currNum = getRandomInt();
  const rightAnswer = currNum % 2 === 0 ? 'yes' : 'no';

  return [currNum, rightAnswer];
};

export { startEvenGame };
