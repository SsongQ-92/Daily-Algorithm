const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './text.txt'
const input = fs.readFileSync(path).toString().trim().split("\n").map(Number); 

const remainderArr = [];

input.forEach(v => remainderArr.push(v % 42));

console.log([...new Set(remainderArr)].length);
