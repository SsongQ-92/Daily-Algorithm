const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split("\n");

const length = input.shift();
const numberArray = input.map(v => v.split(" "));
let answer = "";

for (let i = 0; i < length; i++) {
  if (i !== length - 1) {
    answer += `${Number(numberArray[i][0]) + Number(numberArray[i][1])}` + `\n`;
  } else {
    answer += `${Number(numberArray[i][0]) + Number(numberArray[i][1])}`;
  }
};

console.log(answer);