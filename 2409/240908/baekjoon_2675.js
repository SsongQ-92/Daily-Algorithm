const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './text.txt'
const input = fs.readFileSync(path).toString().trim().split("\n");

let answer = ``;

const targetArr = [];

for (let i = 0; i < input.length; i++) {
  if(input[i].includes(" ") === true) targetArr.push(input[i].split(" "));
}

for (let i = 0; i < targetArr.length; i++) {
  let word = '';

  targetArr[i][1].split("").forEach(v => word += v.repeat(Number(targetArr[i][0])));
  
  if (i !== targetArr.length - 1) {
    answer += `${word}` + `\n`;
  } else {
    answer += `${word}`;
  }
}

console.log(answer);
