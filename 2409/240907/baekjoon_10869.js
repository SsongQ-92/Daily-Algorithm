const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split(" ");

const A = Number(input[0]);
const B = Number(input[1]);

const sum = A + B;
const sub = A - B;
const multi = A * B;
const quo = Math.floor(A / B);
const remainder = A % B;

console.log(`${sum}\n${sub}\n${multi}\n${quo}\n${remainder}`);
