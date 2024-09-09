const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './text.txt';
const input = fs.readFileSync(path).toString().trim().split("\n");

const targetNum = input[0].split(" ").map(Number).at(1);
const numArr = input[1].split(" ").map(Number);

let answer = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < numArr.length - 2; i++) {
  for (let j = i + 1; j < numArr.length - 1; j++) {
    for (let k = j + 1; k < numArr.length; k++) {
      const sumNum = numArr[i] + numArr[j] + numArr[k];
      if (sumNum <= targetNum && sumNum > answer) {
        answer = sumNum;
      }
    }
  }
}

console.log(answer);
