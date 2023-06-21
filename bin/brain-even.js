#!/usr/bin/env node
import evenGame from '../src/games/brain-even.js';
import startGame from '../src/index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
startGame(evenGame, rule);
