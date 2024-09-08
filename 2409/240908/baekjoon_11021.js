const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './text.txt'
const input = fs.readFileSync(path).toString().trim().split("\n"); 

const len = input.shift();
let answer = ``;

for (let i = 0; i < input.length; i++) {
  if (i !== input.length) {
    answer += `Case #${i + 1}: ${Number(input[i][0]) + Number(input[i][2])}` + `\n`;
  } else {
    answer += `Case #${i + 1}: ${Number(input[i][0]) + Number(input[i][2])}`;
  }
}

console.log(answer);
