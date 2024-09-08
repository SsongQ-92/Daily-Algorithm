const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './text.txt'
const input = fs.readFileSync(path).toString().trim().split("\n"); 

let answer = ``;

for (let i = 0; i < input.length - 1; i++) {
  if (i !== input.length - 2) {
    answer += `${Number(input[i][0]) + Number(input[i][2])}` + `\n`;
  } else {
    answer += `${Number(input[i][0]) + Number(input[i][2])}`;
  }
}

console.log(answer);
