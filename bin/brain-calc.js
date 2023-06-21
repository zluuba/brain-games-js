#!/usr/bin/env node
import calcGame from '../src/games/brain-calc.js';
import startGame from '../src/index.js';

const rule = 'What is the result of the expression?';
startGame(calcGame, rule);
