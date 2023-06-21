const getRandomInt = () => {
    const maxNumber = 25;
    return Math.floor(Math.random() * maxNumber);
  };
  
const getOperatorAndRightAnswer = (num1, num2) => {
  const operations = [{
    sign: '+',
    method: function(num1, num2) { return num1 + num2; }
  }, {
    sign: '-',
    method: function(num1, num2) { return num1 - num2; }
  }, {
    sign: '*',
    method: function(num1, num2) { return num1 * num2; }
  }];
  
  const selectedOperator = Math.floor(Math.random() * operations.length);
  const operator = operations[selectedOperator].sign;
  const rightAnswer = operations[selectedOperator].method(num1, num2);
  
  return [operator, rightAnswer];
}

const startCalcGame = () => {
  const num1 = getRandomInt();
  const num2 = getRandomInt();
  const [operator, rightAnswer] = getOperatorAndRightAnswer(num1, num2);
  const question = `${num1} ${operator} ${num2}`

  return [question, rightAnswer.toString()];
};

export { startCalcGame };
