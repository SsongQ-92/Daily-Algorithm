const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './text.txt';
const input = fs.readFileSync(path).toString().trim().split("\n");

let answer = 0;



console.log(answer);
