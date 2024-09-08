const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './text.txt'
const input = fs.readFileSync(path).toString().trim().split("\n"); 

const len = input.shift();
const numArr = input.map(v => v.split(" "));
let answer = ``;

for (let i = 0; i < numArr.length; i++) {
  const firstNum = Number(numArr[i][0]);
  const secondNum = Number(numArr[i][1]);

  if (i !== numArr.length - 1) {
    answer += `${firstNum + secondNum}` + `\n`;
  } else {
    answer += `${firstNum + secondNum}`;
  };
};

console.log(answer);
