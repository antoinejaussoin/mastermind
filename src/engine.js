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
  const found = [false, false, false, false];

  secret.forEach((color, index) => {
    if (combination[index] === color) {
      found[index] = true;
      correct++;
    }
  });

  combination.forEach((color, index) => {
    let foundHere = false;
    secret.forEach((secretColor, secretIndex) => {
      if (index !== secretIndex && !foundHere) {
        if (!found[secretIndex]) {
          if (color === secretColor) {
            found[secretIndex] = true;
            foundHere = true;
            misplaced++;
          }
        }
      }
    });
  });
  return {
    correct,
    misplaced
  };

  // let perfectMatches = combination.filter((col, idx) => col == secret[idx]);
  // let correct = perfectMatches.length;

  // let secretCountByColors = countBy(secret);
  // let totalColorMatches = keys(countBy(combination)).reduce(
  //     (sum, count, color) =>
  //         sum += Math.min(secretCountByColors[color] || 0, count)
  //     , 0)
  // let correctColor = totalColorMatches - correct

  // return {correct: correct, misplaced: correctColor}
};