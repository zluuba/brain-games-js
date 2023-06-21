#!/usr/bin/env node
import startProgressionGame from '../src/games/brain-progression.js';
import gameCore from '../src/index.js';

const rule = 'What number is missing in the progression?';
gameCore(startProgressionGame, rule);
