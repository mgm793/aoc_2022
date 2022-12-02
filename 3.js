const fs = require('fs');
const filename = process.argv[2];
const input = fs.readFileSync(filename, 'utf-8').split('\n');