const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split(" ").map(Number);

const A = input[0];
const B = input[1];
const C = input[2];

console.log(`${(A + B) % C}
${((A % C) + (B % C)) % C}
${(A * B) % C}
${((A % C) * (B % C)) % C}`);