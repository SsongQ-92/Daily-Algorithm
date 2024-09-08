const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './text.txt'
const input = fs.readFileSync(path).toString().split(" ").map(Number);

let answer;
let countIfSame = 0;

if (input[0] === input[1]) countIfSame++;
if (input[1] === input[2]) countIfSame++;
if (input[2] === input[0]) countIfSame++;

if (countIfSame === 3) {
  answer = 10000 + input[0] * 1000;
} else if (countIfSame === 1) {
  let sameNum;
  
  if (input[0] === input[1]) sameNum = input[0];
  else {
    if (input[0] === input[2]) sameNum = input[0];
    if (input[1] === input[2]) sameNum = input[1];
  }

  answer = 1000 + sameNum * 100;
} else {
  answer = Math.max(...input) * 100;
}

console.log(answer);
