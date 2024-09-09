const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './text.txt';
const input = fs.readFileSync(path).toString().trim().split("\n");

const len = input.shift();

let answer = ``;

for (let i = 0; i < input.length; i++) {
  const stack = [];

  for (const value of input[i]) {
    if (stack[stack.length - 1] === "(" && value === ")") {
      stack.pop();
    } else if (stack.length === 0 || stack[stack.length - 1] === value) {
      stack.push(value);
    }
  }

  if (i !== input.length - 1) {
    answer += `${stack.length ? "NO" : "YES"}` + `\n`;
  } else {
    answer += `${stack.length ? "NO" : "YES"}`;
  }
}

console.log(answer);
