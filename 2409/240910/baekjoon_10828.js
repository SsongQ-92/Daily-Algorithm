const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './text.txt';
const input = fs.readFileSync(path).toString().trim().split("\n");

const len = input.shift();
const newInput = input.map(v => {
  if (v.includes(" ")) return v.split(" ");
  else return v;
});

let answer = ``;
const stack = [];

for (let i = 0; i < newInput.length; i++) {
  if (Array.isArray(newInput[i])) {
    stack.push(Number(newInput[i][1]));
  } else if (newInput[i] === "top") {
    answer += `${stack.length === 0 ? -1 : stack[stack.length - 1]}` + `\n`;
  } else if (newInput[i] === "size") {
    answer += `${stack.length}` + `\n`;
  } else if (newInput[i] === "empty") {
    answer += `${stack.length === 0 ? 1 : 0}` + `\n`;
  } else if (newInput[i] === "pop") {
    answer += `${stack.length === 0 ? -1 : stack.pop()}` + `\n`;
  }
}

console.log(answer);
