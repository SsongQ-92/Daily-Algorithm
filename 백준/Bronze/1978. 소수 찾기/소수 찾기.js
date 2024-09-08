const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './text.txt';
const input = fs.readFileSync(path).toString().trim().split("\n");

let answer = 0;

const len = input.shift();
const numArr = input[0].split(" ").map(Number);

for (const value of numArr) {
  if (value === 1) continue;

  const valueSqrt = Math.floor(Math.sqrt(value));
  let shareNum = 0;

  for (let i = 1; i <= valueSqrt; i++) {
    if (value % i === 0) shareNum++;
  }

  if (shareNum === 1) answer++;
}

console.log(answer);
