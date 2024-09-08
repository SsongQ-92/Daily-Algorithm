const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './text.txt'
const [str1, str2] = fs.readFileSync(path).toString().trim().split("\n"); 

const stdNum = str1.split(" ").map(Number)[1];
const numArr = str2.split(" ").map(Number);

const resultArr = [];

for (const val of numArr) {
  if (val < stdNum) resultArr.push(val);
}

console.log(resultArr.join(" "));
