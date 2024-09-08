const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './text.txt'
const input = fs.readFileSync(path).toString().split("\n").map(Number);

let answer = ``;
const countObj = {
  "0": 0,
  "1": 0,
  "2": 0,
  "3": 0,
  "4": 0,
  "5": 0,
  "6": 0,
  "7": 0,
  "8": 0,
  "9": 0,
};

const multiplyArr = (input[0] * input[1] * input[2]).toString().split("");

multiplyArr.forEach(v => {
  countObj[v] += 1;
});

for (const key in countObj) {
  if (key !== "9") {
    answer += `${countObj[key]}` + `\n`;
  } else {
    answer += `${countObj[key]}`;
  }
}

console.log(answer);
