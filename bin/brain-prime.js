#!/usr/bin/env node
import primeGame from '../src/games/brain-prime.js';
import startGame from '../src/index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
startGame(primeGame, rule);
