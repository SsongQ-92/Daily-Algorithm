const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './text.txt';
const input = fs.readFileSync(path).toString().trim().split("\n");

let answer = 0;

const len = input.shift();

for (let i = 0; i < input.length; i++) {
  const obj = {};
  const stack = [];
  
  for (const letter of input[i]) {
    if (obj[letter] === undefined) {
      stack.push(letter);
      obj[letter] = 1;
    } else if (obj[letter] !== undefined && stack[stack.length - 1] === letter) {
      stack.push(letter);
      obj[letter] += 1;
    } else {
      break;
    }
  }

  if (stack.length === input[i].length) answer++;
}

console.log(answer);
