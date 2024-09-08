const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './text.txt'
const input = Number(fs.readFileSync(path).toString().trim());

console.log(input - 543);
