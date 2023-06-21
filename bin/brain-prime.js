#!/usr/bin/env node
import { startPrimeGame } from '../src/games/brain-prime.js';
import gameCore from '../src/index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
gameCore(startPrimeGame, rule);
