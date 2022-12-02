const fs = require('fs');
const filename = process.argv[2];
const input = fs.readFileSync(filename, 'utf-8').split('\n');

const transformationPlayer1 = {
  'A': 'X',
  'B': 'Y',
  'C': 'Z'
}

const playPoints = {
  'X': 1,
  'Y': 2,
  'Z': 3,
}

const winPoints = {
  'XY': 6,
  'XZ': 0,
  'YX': 0,
  'YZ': 6,
  'ZX': 6,
  'ZY': 0,
  'XX': 3,
  'YY': 3,
  'ZZ': 3
}

const player2move = {
  'XY': 'X',
  'XZ': 'Y',
  'YX': 'X',
  'YZ': 'Z',
  'ZX': 'Y',
  'ZY': 'Z',
  'XX': 'Z',
  'YY': 'Y',
  'ZZ': 'X'
}

// FIRST

let result = 0;
for(let i = 0; i < input.length; ++i){
  const [player1, player2] = input[i].split(' ');
  const standardPlayer1 = transformationPlayer1[player1];
  result += winPoints[`${standardPlayer1}${player2}`] + playPoints[player2];
} 
console.log(result);

// SECOND

let res = 0;
for(let i = 0; i < input.length; ++i){
  const [player1, play] = input[i].split(' ');
  const standardPlayer1 = transformationPlayer1[player1];
  const player2 = player2move[`${standardPlayer1}${play}`];
  res += winPoints[`${standardPlayer1}${player2}`] + playPoints[player2];
  console.log({standardPlayer1, player2, play})
}

console.log(res);
/*

A for Rock, B for Paper, and C for Scissors.

X for Rock, Y for Paper, and Z for Scissors.

X lose, Y draw, Z win
*/