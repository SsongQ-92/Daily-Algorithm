const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './text.txt'
const input = Number(fs.readFileSync(path).toString().trim());

let answer = 0;

if (input % 5 === 0) {
  answer = input / 5;
} else {
  for (let i = Math.floor(input / 5); i >= 0; i--) {
    if ((input - (i * 5)) % 3 === 0) {
      answer += i;
      answer += (input - (i * 5)) / 3;
      break;
    };
  };
};

if (answer === 0) answer = -1;

console.log(answer);
