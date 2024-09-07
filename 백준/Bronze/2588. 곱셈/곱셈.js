const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split("\n");

const A = Number(input[0]);
const B = input[1];

const answer = `${A * B[2]}
${A * B[1]}
${A * B[0]}
${A * B}`;

console.log(answer);