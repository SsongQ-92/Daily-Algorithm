const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './text.txt'
const input = fs.readFileSync(path).toString().trim().split("\n").map(Number); 

const maxNum = Math.max(...input);

const answer = `${maxNum}
${input.indexOf(maxNum) + 1}`

console.log(answer);
