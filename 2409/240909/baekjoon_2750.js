const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './text.txt';
const input = fs.readFileSync(path).toString().trim().split("\n").map(Number);

let answer = ``;

const len = input.shift();
input.sort((a, b) => a - b);

for (let i = 0; i < input.length; i++) {
  if (i !== input.length - 1) {
    answer += `${input[i]}` + `\n`;
  } else {
    answer += `${input[i]}`;
  }
}

console.log(answer);
