#!/usr/bin/env node
import startProgressionGame from '../src/games/brain-progression.js';
import startGame from '../src/index.js';

const rule = 'What number is missing in the progression?';
startGame(startProgressionGame, rule);
