const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './text.txt';
const input = Number(fs.readFileSync(path).toString().trim());

let answer = 1;

if (input === 0) {
  answer = 1;
} else {
  for (let i = input; i >= 1; i--) {
    answer *= i;
  }
}

console.log(answer);
