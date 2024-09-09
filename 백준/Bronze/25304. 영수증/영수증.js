const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './text.txt';
const input = fs.readFileSync(path).toString().trim().split("\n");

const totalPrice = Number(input.shift());
const totalAmount = Number(input.shift());
const newInput = input.map(v => v.split(" ").map(Number));

let answer = "No";
let sumPrice = 0;

for (const val of newInput) {
  sumPrice += val[0] * val[1];
}

if (totalPrice === sumPrice) answer = "Yes";

console.log(answer);
