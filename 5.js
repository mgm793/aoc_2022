const fs = require("fs");
const filename = process.argv[2];
const [stacks, movesMatrix] = fs.readFileSync(filename, "utf-8").split("\n\n");
const moves = movesMatrix.split("\n");

function initialStacks(input) {
  const clean = input.replaceAll(/[\[\]]/g, " ").split("\n");
  const newStacks = Array(Math.ceil(clean[0].length / 4))
    .fill()
    .map((_) => []);
  for (let i = 0; i < clean.length - 1; ++i) {
    for (let j = 1; j < clean[i].length; j += 4) {
      if (clean[i][j] === " ") continue;
      const index = Math.ceil(j / 4) - 1;
      newStacks[index].push(clean[i][j]);
    }
  }
  return newStacks;
}

function getTops(s) {
  let tops = "";
  for (let i = 0; i < s.length; ++i) {
    tops += s[i][0];
  }
  return tops;
}

//First
const initial = initialStacks(stacks);

function move(moveString) {
  const [n, from, to] = moveString
    .replaceAll(" ", "")
    .replaceAll(/[a-z]+/g, " ")
    .trim()
    .split(" ");
  for (let i = 0; i < n; ++i) {
    const toMove = initial[from - 1].shift();
    initial[to - 1].unshift(toMove);
  }
}

for (let i = 0; i < moves.length; ++i) {
  move(moves[i]);
}

const final = getTops(initial);

console.log(final);

//second

const initial2 = initialStacks(stacks);
function move2(moveString) {
  const [n, from, to] = moveString
    .replaceAll(" ", "")
    .replaceAll(/[a-z]+/g, " ")
    .trim()
    .split(" ");
  const toMove = [];
  for (let i = 0; i < n; ++i) {
    const moving = initial2[from - 1].shift();
    if (moving) toMove.push(moving);
  }
  initial2[to - 1] = [...toMove, ...initial2[to - 1]];
}

for (let i = 0; i < moves.length; ++i) {
  move2(moves[i]);
}

const final2 = getTops(initial2);

console.log(final2);
