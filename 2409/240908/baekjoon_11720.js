const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './text.txt'
const input = fs.readFileSync(path).toString().trim().split("\n"); 

const len = Number(input.shift());
const numArr = input[0].split("").map(Number);
const answer = numArr.reduce((acc, val) => acc + val);

console.log(answer);
