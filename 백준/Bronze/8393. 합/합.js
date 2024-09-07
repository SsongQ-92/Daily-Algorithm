const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './text.txt';
const input = Number(fs.readFileSync(file).toString());

answer = 0;

for (let i = 1; i <= input; i++) {
  answer += i;
};

console.log(answer);