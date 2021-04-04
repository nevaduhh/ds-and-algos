// Rock, Paper, Scissors!
// Abigail and Benson are playing Rock, Paper, Scissors.

// Each game is represented by an array of length 2, where the first element represents what Abigail played and the second element represents what Benson played.

// Given a sequence of games, determine who wins the most number of matches. If they tie, output "Tie".

// R stands for Rock
// P stands for Paper
// S stands for Scissors
// Examples
// calculateScore([["R", "P"], ["R", "S"], ["S", "P"]]) ➞ "Abigail"

// // Benson wins the first game (Paper beats Rock).
// // Abigail wins the second game (Rock beats Scissors).
// // Abigail wins the third game (Scissors beats Paper). 
// // Abigail wins 2/3.

// calculateScore([["R", "R"], ["S", "S"]]) ➞ "Tie"

// calculateScore([["S", "R"], ["R", "S"], ["R", "R"]]) ➞ "Tie"

const calculateWinner = (abigailPlay, bensonPlay) => {
  const WINS = {
    'P': 'R',
    'R': 'S',
    'S': 'P',
  };

  return (WINS[abigailPlay] === bensonPlay) ? 'abigailScore' : 'bensonScore';
}

const calculateScore = (games) => {
  const scores = games.reduce((totalScore, [abigailPlay, bensonPlay]) => {
    if (abigailPlay === bensonPlay) {
      totalScore.tieScore++;

      return totalScore;
    }

    const winner = calculateWinner(abigailPlay, bensonPlay);

    totalScore[winner]++;

    return totalScore;
  }, {
    abigailScore: 0,
    bensonScore: 0,
    tieScore: 0,
  });

  console.log(scores)

  if (scores.abigailScore > scores.bensonScore) {
    return 'Abigail';
  }

  if (scores.bensonScore > scores.abigailScore) {
    return 'Benson';
  }

  return 'Tie';
};

const result = calculateScore([ [ 'S', 'R' ], [ 'R', 'S' ] ]);

console.log(result)
