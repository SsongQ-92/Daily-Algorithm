const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './text.txt'
const input = fs.readFileSync(path).toString().trim();

let cycle = 0;

let prevNum = input.length === 1 ? "0" + input : input;

while (true) {
  let sumNum = Number(prevNum[0]) + Number(prevNum[1]);
  let stringSumNum = sumNum.toString().length === 1 ? sumNum.toString()[0] : sumNum.toString()[1];
  let newNum = Number(prevNum[1] + stringSumNum).toString();

  cycle++;

  if (input === newNum) {
    break;
  } else {
    prevNum = newNum.length === 1 ? "0" + newNum : newNum;
  }
} 

console.log(cycle);
