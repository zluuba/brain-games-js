#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';

const getRandomInt = () => {
  const maxNumber = 100;
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

const startCalcGame = (name, rule) => {
  console.log(rule);
  const rounds = 3;

  for (let i = 0; i < rounds; i += 1) {
    const num1 = getRandomInt();
    const num2 = getRandomInt();
    const [operator, rightAnswer] = getOperatorAndRightAnswer(num1, num2);

    const userAnswer = readlineSync.question(`Question: ${num1} ${operator} ${num2} `);
    console.log(`Your answer: ${userAnswer}`);

    if (rightAnswer === Number(userAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
  }

  console.log(`Congratulations, ${name}!`);
  return true;
};

const name = greetUser();
const rule = 'What is the result of the expression?';
startCalcGame(name, rule);
