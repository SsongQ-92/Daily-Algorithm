const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './text.txt';
const input = fs.readFileSync(path).toString().trim().split("\n");

let answer = ``;

const len = input.shift();
const numArr = input.map(v => {
  const newArr = v.split(" ").map(Number);
  newArr.shift();

  return newArr;
});

for (let i = 0; i < numArr.length; i++) {
  let numHigherThanAve = 0;

  const total = numArr[i].reduce((acc, val) => acc + val);
  const average = Number((total / numArr[i].length).toFixed(5));

  numArr[i].forEach(v => {
    if (v > average) numHigherThanAve++;
  })

  const proportion = (numHigherThanAve / numArr[i].length).toFixed(5) * 100;

  if (i !== numArr.length - 1) {
    answer += `${proportion}` + "%" + `\n`;
  } else {
    answer += `${proportion}` + "%";
  }
}

console.log(answer);
