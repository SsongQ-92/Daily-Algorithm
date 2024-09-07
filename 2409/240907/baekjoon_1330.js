const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split(" ");

const A = Number(input[0]);
const B = Number(input[1]);

let answer;

if (A > B) answer = ">";
else if (A == B) answer = "==";
else answer = "<";

console.log(answer);
