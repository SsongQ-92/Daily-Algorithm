const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './text.txt';
const input = fs.readFileSync(path).toString().trim().split("\n");

let answer = 0;

const len = input.shift();
const numArr = input[0].split(" ").map(Number);
const vNum = Number(input[1]);

const sameNumArr = numArr.filter(v => v === vNum);
answer = sameNumArr.length;

console.log(answer);
