const fs = require("fs");
const filename = process.argv[2];
const input = fs.readFileSync(filename, "utf-8");

//first
let start = 0;
const visited = {};
for (let i = 0; i < input.length; i++) {
  if (i - start === 4){
    console.log(i);
    break;
  }
  if (visited[input[i]] !== undefined && ((i - visited[input[i]]) < 4)) {
    start = visited[input[i]] + 1 <= start ? start : visited[input[i]] + 1;
  }
  visited[input[i]] = i;
}


//second
let start2 = 0;
const visited2 = {};
for (let i = 0; i < input.length; i++) {
  if (i - start2 === 14){
    console.log(i);
    break;
  }
  if (visited2[input[i]] !== undefined && ((i - visited2[input[i]]) < 14)) {
    start2 = visited2[input[i]] + 1 <= start2 ? start2 : visited2[input[i]] + 1;
  }
  visited2[input[i]] = i;
}

//bvwbjplbgvbhsrlpgdmjqwftvncz
//0123456789012345678901234567