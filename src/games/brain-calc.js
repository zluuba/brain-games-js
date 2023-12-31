import getRandomInt from '../common.js';
import core from '../index.js';

const rule = 'What is the result of the expression?';

const getOperatorAndRightAnswer = (num1, num2) => {
  const operations = [{
    sign: '+',
    method: (a, b) => a + b,
  }, {
    sign: '-',
    method: (a, b) => a - b,
  }, {
    sign: '*',
    method: (a, b) => a * b,
  }];

  const operator = Math.floor(Math.random() * operations.length);
  const operatorSign = operations[operator].sign;
  const rightAnswer = operations[operator].method(num1, num2);

  return [operatorSign, rightAnswer];
};

const calcGame = () => {
  const num1 = getRandomInt(0, 25);
  const num2 = getRandomInt(0, 25);
  const [operator, rightAnswer] = getOperatorAndRightAnswer(num1, num2);
  const question = `${num1} ${operator} ${num2}`;

  return [question, rightAnswer.toString()];
};

export default () => core(calcGame, rule);
