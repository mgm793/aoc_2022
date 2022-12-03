const fs = require("fs");
const filename = process.argv[2];
const input = fs.readFileSync(filename, "utf-8").split("\n");

function getRepeatedByMiddle(chunk) {
  const middle = Math.floor(chunk.length / 2);

  const visited = new Set();
  for (let i = 0; i < chunk.length; ++i) {
    if (i < middle) {
      visited.add(chunk[i]);
    } else {
      if (visited.has(chunk[i])) {
        return chunk[i];
      }
    }
  }
}

function getRepeatedByGroup(first, second, third) {
  const visited = new Set(first);
  const common = new Set();
  for (let i = 0; i < second.length; ++i) {
    if (visited.has(second[i])) common.add(second[i]);
  }
  for (let i = 0; i < third.length; ++i) {
    if (common.has(third[i])) return third[i];
  }
}

function getPriority(item) {
  if (item === item.toLowerCase()) {
    return item.charCodeAt(0) - 96;
  } else {
    return item.charCodeAt(0) - 38;
  }
}

// FIRST

let sumPriorities = 0;
for (let i = 0; i < input.length; ++i) {
  const repetead = getRepeatedByMiddle(input[i]);
  sumPriorities += getPriority(repetead);
}
console.log(sumPriorities);

// SECOND
let sum3Priorities = 0;
for (let i = 0; i < input.length; i += 3) {
  const repetead = getRepeatedByGroup(input[i], input[i + 1], input[i + 2]);
  sum3Priorities += getPriority(repetead);
}

console.log(sum3Priorities);
