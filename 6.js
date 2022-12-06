const fs = require("fs");
const filename = process.argv[2];
const input = fs.readFileSync(filename, "utf-8");

//first
let start = 0;
const visited = {};
for (let i = 0; i < input.length; i++) {
  if (visited[input[i]] !== undefined && i - visited[input[i]] < 4) {
    start = visited[input[i]] + 1;
  }
  if (i - start === 4) {
    console.log(i);
    break;
  }
  visited[input[i]] = i;
}
//second

let start2 = 0;
const visited2 = {};
for (let i = 0; i < input.length; i++) {
  if (visited2[input[i]] !== undefined && i - visited2[input[i]] < 14) {
    start2 = visited2[input[i]] + 1;
  }
  if (i - start2 === 14) {
    console.log(i);
    break;
  }
  visited2[input[i]] = i;
}
