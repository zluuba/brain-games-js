#!/usr/bin/env node
import gcdGame from '../src/games/brain-gcd.js';
import startGame from '../src/index.js';

const rule = 'Find the greatest common divisor of given numbers.';
startGame(gcdGame, rule);
