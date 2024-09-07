const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './text.txt';
const input = Number(fs.readFileSync(file).toString());

let answer = '';

for (let i = 1; i <= input; i++) {
  if (i !== input) {
    answer += '*'.repeat(i) + '\n';
  } else {
    answer += '*'.repeat(i);
  };
};

console.log(answer);