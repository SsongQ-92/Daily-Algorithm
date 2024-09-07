const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './text.txt';
const input = Number(fs.readFileSync(file).toString());

const answer = `${input} * 1 = ${input * 1}
${input} * 2 = ${input * 2}
${input} * 3 = ${input * 3}
${input} * 4 = ${input * 4}
${input} * 5 = ${input * 5}
${input} * 6 = ${input * 6}
${input} * 7 = ${input * 7}
${input} * 8 = ${input * 8}
${input} * 9 = ${input * 9}`

console.log(answer);
