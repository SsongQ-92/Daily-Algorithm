const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split(" ");

const A = input[0];
const B = input[1];

console.log(A * B);
