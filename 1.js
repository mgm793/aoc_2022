const fs = require('fs');
const filename = process.argv[2];
const input = fs.readFileSync(filename, 'utf-8').split('\n');
let actualSum = 0;
const values = [];
for(let i = 0; i < input.length; ++i){
  if(input[i].trim() === ''){
    values.push(actualSum);
    actualSum = 0; 
  }
  else {
    actualSum += +input[i];
  }
}
values.sort((a,b) => b - a);
let sum = 0;
for(let i = 0; i < 3; ++i){
 sum += values[i];
}
console.log(sum);