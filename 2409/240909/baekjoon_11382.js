const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './text.txt';
const input = fs.readFileSync(path).toString().trim().split(" ").map(Number);

console.log(input[0] + input[1] + input[2]);
