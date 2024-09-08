const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './text.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const len = input.shift();
let answer = ``;

for (let i = 0; i < input.length; i++) {
  let totalScore = 0;
  let consecutiveO = 0;

  for (const value of input[i]) {
    if (value === 'O') {
      consecutiveO++;
      totalScore += consecutiveO;
    } else {
      consecutiveO = 0;
    }
  }

  if (i !== input.length - 1) {
    answer += `${totalScore}` + `\n`;
  } else {
    answer += `${totalScore}`;
  }
}

console.log(answer);
