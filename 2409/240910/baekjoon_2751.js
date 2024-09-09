const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './text.txt';
const input = fs.readFileSync(path).toString().trim().split("\n").map(Number);

const len = input.shift();
input.sort((a, b) => a - b);

let answer = ``;

for (const num of input) {
  answer += `${num}` + `\n`;
}

console.log(answer);
