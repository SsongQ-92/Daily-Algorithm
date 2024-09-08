const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './text.txt'
const input = Number(fs.readFileSync(path).toString()); 

let answer = ``;

for (let i = 1; i <= input; i++) {
  if (i !== input) {
    answer += `${i}` + `\n`;
  } else {
    answer += `${i}`
  }
}

console.log(answer);
