#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';

const getRandomInt = () => {
  const maxNumber = 100;
  return Math.floor(Math.random() * maxNumber);
};

const startEvenGame = (name, rule) => {
  console.log(rule);
  const rounds = 3;

  for (let i = 0; i < rounds; i += 1) {
    const currNum = getRandomInt();
    const correctAnswer = currNum % 2 === 0 ? 'yes' : 'no';
    const userAnswer = readlineSync.question(`Question: ${currNum} `);
    console.log(`Your answer: ${userAnswer}`);

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
  }

  console.log(`Congratulations, ${name}!`);
  return true;
};

const name = greetUser();
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
startEvenGame(name, rule);
