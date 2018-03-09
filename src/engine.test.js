import { getScore } from './engine';

describe('Scoring tests', () => {
  const scenarios = [
    { secret: [ 1, 2, 3, 4 ], combination: [ 1, 2, 3, 4 ], score: { correct: 4, misplaced: 0 }, name: 'All correct' },
    { secret: [ 1, 2, 3, 4 ], combination: [ 5, 6, 7, 8 ], score: { correct: 0, misplaced: 0 }, name: 'None correct' },
    { secret: [ 1, 2, 3, 4 ], combination: [ 4, 3, 2, 1 ], score: { correct: 0, misplaced: 4 }, name: 'All misplaced' },
    { secret: [ 1, 2, 3, 4 ], combination: [ 5, 6, 7, 4 ], score: { correct: 1, misplaced: 0 }, name: 'One correct' },
    { secret: [ 1, 2, 3, 4 ], combination: [ 5, 6, 7, 1 ], score: { correct: 0, misplaced: 1 }, name: 'One misplaced' },
    { secret: [ 1, 1, 1, 1 ], combination: [ 1, 1, 1, 1 ], score: { correct: 4, misplaced: 0 }, name: 'All the same, all correct' },
    { secret: [ 1, 1, 2, 2 ], combination: [ 1, 1, 2, 2 ], score: { correct: 4, misplaced: 0 }, name: 'All the same, duplicates' },
    { secret: [ 1, 1, 2, 2 ], combination: [ 2, 2, 1, 1 ], score: { correct: 0, misplaced: 4 }, name: 'All misplaced, duplicates' },
    { secret: [ 1, 1, 2, 2 ], combination: [ 2, 2, 1, 1 ], score: { correct: 0, misplaced: 4 }, name: 'All misplaced, duplicates' },
    { secret: [ 1, 2, 1, 3 ], combination: [ 4, 1, 1, 1 ], score: { correct: 1, misplaced: 1 }, name: 'Example 1' }, // http://www.onlinespiele-sammlung.de/mastermind/mastermindgames/lundy/scx.htm
    { secret: [ 1, 2, 1, 1 ], combination: [ 3, 4, 5, 1 ], score: { correct: 1, misplaced: 0 }, name: 'Example 2' },
    { secret: [ 1, 2, 3, 2 ], combination: [ 4, 5, 3, 1 ], score: { correct: 1, misplaced: 1 }, name: 'Example 3' },
    { secret: [ 1, 2, 3, 2 ], combination: [ 4, 6, 5, 2 ], score: { correct: 1, misplaced: 0 }, name: 'Example 4' },
    { secret: [ 1, 2, 3, 2 ], combination: [ 4, 3, 4, 4 ], score: { correct: 0, misplaced: 1 }, name: 'Example 5' },
    { secret: [ 1, 2, 3, 2 ], combination: [ 2, 1, 3, 2 ], score: { correct: 2, misplaced: 2 }, name: 'Example 6' },
    { secret: [ 1, 2, 3, 2 ], combination: [ 1, 2, 3, 2 ], score: { correct: 4, misplaced: 0 }, name: 'Example 7' },
  ];

  scenarios.forEach(scenario => {
    it(scenario.name, () => {
      expect(getScore(scenario.combination, scenario.secret)).toEqual(scenario.score);
    });
  });
});
