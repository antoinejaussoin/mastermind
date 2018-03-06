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
      found[index] = true;
      correct++;
    }
  });

  secret.forEach((color, index) => {
    let foundHere = false;
    combination.forEach((combColor, combIndex) => {
      if (index !== combIndex) {
        if (!foundHere && !found[index] && combColor === color) {
          found[combIndex] = true;
          foundHere = true;
          misplaced++;
        }
      }
    });
  });
  return {
    correct,
    misplaced
  };
};