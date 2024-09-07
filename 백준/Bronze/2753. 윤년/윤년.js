const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './text.txt';
const input = Number(fs.readFileSync(file).toString());

let answer = 0;

if (input % 4 === 0) {
  if (input % 100 !== 0 || input % 400 === 0) answer = 1;
}

console.log(answer);