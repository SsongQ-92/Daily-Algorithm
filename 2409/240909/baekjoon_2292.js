const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './text.txt';
const input = Number(fs.readFileSync(path).toString().trim());

let answer = 1;
const targetNum = input - 1;

const SIX = 6;
let i = 1;
let distance = 6;

while (true) {
  if (targetNum === 0) break;
  
  answer++;

  if (targetNum <= distance) {
    break;
  } else {
    i++;
    distance += SIX * i;
  }
}

console.log(answer);
