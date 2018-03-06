import colors from './colors';

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
      found[index] === true;
      correct++;
    } else {
      combination.forEach(combColor => {
        if (!found[index] && combColor === color) {
          found[index] === true;
          misplaced++;
        }
      });
    }
  });
  return {
    correct,
    misplaced
  };
};