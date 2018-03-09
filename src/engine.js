import colors from './colors';
import { countBy, keys } from 'lodash';

export const getRandomColor = () => colors[Math.floor(Math.random()*colors.length)];

export const getSecretCombination = () => {
  return [
    getRandomColor(),
    getRandomColor(),
    getRandomColor(),
    getRandomColor()
  ];
};

export const getScore = (combination, secret) => {
  let correct = 0;
  let misplaced = 0;
  const correctPositions = [false, false, false, false];
  const countedPositions = [false, false, false, false];

  secret.forEach((color, index) => {
    if (combination[index] === color) {
      correctPositions[index] = true;
      correct++;
    }
  });

  for (let index = 0; index < combination.length; index++) {
    for (let secretIndex = 0; secretIndex < secret.length; secretIndex++) {
      const color = combination[index];
      const secretColor = secret[secretIndex];
      if (index === secretIndex) { continue; }
      if (correctPositions[secretIndex] || correctPositions[index] || countedPositions[secretIndex]) { continue; }
      if (color === secretColor) {
        misplaced++;
        countedPositions[secretIndex] = true;
        break;
      }
    }
  }

  return {
    correct,
    misplaced
  };
};