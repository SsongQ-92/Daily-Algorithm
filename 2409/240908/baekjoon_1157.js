const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './text.txt'
const input = fs.readFileSync(path).toString().trim();

const dict = new Map();
let answer;

for (const letter of input) {
  const upperCaseLetter = letter.toUpperCase();
  dict.set(upperCaseLetter, (dict.get(upperCaseLetter) ?? 0) + 1);
}

const maxNumber = Math.max(...dict.values());
const maxFilterArray = Array.from(dict.entries()).filter(array => array[1] === maxNumber);

if (maxFilterArray.length !== 1) {
  answer = "?";
} else {
  answer = maxFilterArray[0][0];
}

console.log(answer);
