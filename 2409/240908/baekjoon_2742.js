const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './text.txt'
const input = Number(fs.readFileSync(path).toString().trim());

let answer = ``;

for (let i = input; i > 0; i--) {
  if (i !== 1) {
    answer += `${i}` + `\n`;
  } else {
    answer += `${i}`;
  };
};

console.log(answer);
