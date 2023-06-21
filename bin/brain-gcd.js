#!/usr/bin/env node
import { startGcdGame } from '../src/games/brain-gcd.js';
import gameCore from '../src/index.js';

const rule = 'Find the greatest common divisor of given numbers.';
gameCore(startGcdGame, rule);
