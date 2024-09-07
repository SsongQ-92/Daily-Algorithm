const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './text.txt';
const input = Number(fs.readFileSync(file).toString())

let answer;

if (input >= 90) answer = "A";
else if (input >= 80) answer = "B";
else if (input >= 70) answer = "C";
else if (input >= 60) answer = "D";
else answer = "F";

console.log(answer);
