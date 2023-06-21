#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';

const rounds = 3;

const gameCore = (game, rule) => {
  const name = greetUser();
  console.log(rule);

  for (let i = 0; i < rounds; i += 1) {
    const [question, rightAnswer] = game();
    const userAnswer = readlineSync.question(`Question: ${question} `);

    if (rightAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
  }

  console.log(`Congratulations, ${name}!`);
  return true;
}

export default gameCore;
