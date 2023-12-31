import getRandomInt from '../common.js';
import core from '../index.js';

const rule = 'What number is missing in the progression?';

const getProgression = () => {
  const progressionLength = getRandomInt(5, 15);
  const step = getRandomInt(2, 5);

  const progression = [];
  let currNumber = getRandomInt(0, 50);

  while (progression.length <= progressionLength) {
    progression.push(currNumber);
    currNumber += step;
  }

  return [progression, progressionLength];
};

const progressionGame = () => {
  const [progression, progressionLength] = getProgression();
  const hideCharIndex = getRandomInt(0, progressionLength - 1);
  const rightAnswer = progression[hideCharIndex].toString();
  progression[hideCharIndex] = '..';
  const question = progression.join(' ');

  return [question, rightAnswer];
};

export default () => core(progressionGame, rule);
