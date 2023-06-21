#!/usr/bin/env node
import { startEvenGame } from './games/brain-even.js';
import gameCore from '../src/index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
gameCore(startEvenGame, rule);
