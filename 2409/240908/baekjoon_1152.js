const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './text.txt'
const input = fs.readFileSync(path).toString().trim(); 

const answer = input === "" ? 0 : input.split(" ").length;

console.log(answer);
