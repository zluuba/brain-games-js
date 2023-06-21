#!/usr/bin/env node
import { startCalcGame } from './games/brain-calc.js';
import gameCore from '../src/index.js';

const rule = 'What is the result of the expression?';
gameCore(startCalcGame, rule);
