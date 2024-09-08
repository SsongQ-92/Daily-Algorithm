const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './text.txt'
const input = fs.readFileSync(path).toString().trim().split("\n"); 

let answer = ``;

for (let i = 0; i < input.length; i++) {
  const firstNum = Number(input[i][0]);
  const secondNum = Number(input[i][2]);

  if (i !== input.length - 1) {
    answer += `${firstNum + secondNum}` + `\n`;
  } else {
    answer += `${firstNum + secondNum}`;
  };
};

console.log(answer);
