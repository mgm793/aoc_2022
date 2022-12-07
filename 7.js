const fs = require("fs");
const filename = process.argv[2];
const input = fs
  .readFileSync(filename, "utf-8")
  .replaceAll("$ ", "")
  .split("\n");
class Folder {
  constructor(name, parent) {
    this.name = name;
    this.child = [];
    this.parent = parent;
    this.size = 0;
  }
}

let actualFolder = new Folder("/", null);
const first = actualFolder;
for (let i = 1; i < input.length; ++i) {
  const [first, second] = input[i].split(" ");
  if (first === "dir") {
    const newFolder = new Folder(second, actualFolder);
    actualFolder.child.push(newFolder);
  }
  if (first === "cd") {
    if (second !== "..")
      actualFolder = actualFolder.child.find((el) => el.name === second);
    else {
      actualFolder = actualFolder.parent;
    }
  }
  if (first === "ls") continue;
  if (first !== "dir" && first !== "cd") {
    actualFolder.size += +first;
  }
}

let sum = 0;
function post_order(node) {
  if (!node) return 0;
  for (let i = 0; i < node.child.length; ++i) {
    node.size += post_order(node.child[i]);
  }
  if (node.size <= 100000) {
    sum += node.size;
  }
  return node.size;
}
post_order(first);

//first
console.log({ sum });

//second
const availableSpace = 70000000 - first.size;
const spaceNeed = 30000000 - availableSpace;

let minSize = {
  value: Infinity,
  folderSize: 0,
};
function post_order_2(node) {
  if (!node) return;
  for (let i = 0; i < node.child.length; ++i) {
    post_order_2(node.child[i]);
  }
  if (node.size >= spaceNeed && minSize.value > node.size - spaceNeed) {
    minSize.value = node.size - spaceNeed;
    minSize.folderSize = node.size;
  }
  return;
}
post_order_2(first);

console.log(minSize);
