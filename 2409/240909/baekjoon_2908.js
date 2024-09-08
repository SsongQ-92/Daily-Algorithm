const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './text.txt';
const input = fs.readFileSync(path).toString().trim().split(" ");

let answer;

const firstNum = Number(input[0].split("").reverse().join(""));
const secondNum = Number(input[1].split("").reverse().join(""));

const biggerNum = Math.max(firstNum, secondNum);

answer = biggerNum;

console.log(answer);
