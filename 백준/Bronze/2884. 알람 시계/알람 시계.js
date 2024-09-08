const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split(" ");

let A = Number(input[0]);
let B = Number(input[1]);

if (B - 45 < 0) {
  if(A === 0) A = 23;
  else A -= 1;

  B = B + 60 - 45;
} else {
  B -= 45;
}

const answer = `${A} ${B}`

console.log(answer);