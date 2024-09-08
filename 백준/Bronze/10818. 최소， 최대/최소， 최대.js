const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './text.txt'
const [len, str] = fs.readFileSync(path).toString().trim().split("\n"); 

const numArr = str.split(" ").map(Number);

console.log(`${Math.min(...numArr)} ${Math.max(...numArr)}`);
