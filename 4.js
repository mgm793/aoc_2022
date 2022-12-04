const fs = require("fs");
const filename = process.argv[2];
const input = fs.readFileSync(filename, "utf-8").split("\n");

//first
let fullSum = 0;
for (let i = 0; i < input.length; ++i) {
  const [first, second] = input[i].split(",");
  const [firstX, firstY] = first.split("-");
  const [secondX, secondY] = second.split("-");
  if (
    (+firstX <= +secondX && +firstY >= +secondY) ||
    (+secondX <= +firstX && +secondY >= +firstY)
  ) {
    ++fullSum;
  }
}
console.log(fullSum);

//second
let someSum = 0;
for (let i = 0; i < input.length; ++i) {
  const [first, second] = input[i].split(",");
  const [firstX, firstY] = first.split("-");
  const [secondX, secondY] = second.split("-");
  if (
    (+firstX <= +secondX && +secondX <= +firstY) ||
    (+secondX <= +firstX && +firstX <= +secondY) ||
    (+firstX <= +secondX && +firstY >= +secondY) ||
    (+secondX <= +firstX && +secondY >= +firstY)
  ) {
    ++someSum;
  }
}
console.log(someSum);
