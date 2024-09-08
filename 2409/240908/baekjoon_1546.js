const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './text.txt'
const input = fs.readFileSync(path).toString().trim().split("\n"); 

const len = input.shift();
const numArr = input[0].split(" ").map(Number);
const maxNum = Math.max(...numArr);
const revisedNum = numArr.map(v => {
  return v/maxNum*100;
})
const sumAllEl = revisedNum.reduce((acc, val) => acc + val);
const answer = Number((sumAllEl / revisedNum.length).toFixed(3));

console.log(answer);
