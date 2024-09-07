const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './text.txt';
const input = Number(fs.readFileSync(file).toString());

answer = '';

for (let i = 1; i <= input; i++) {
  if (i !== input) {
    answer += `${" ".repeat(input - i)}` + `${"*".repeat(i)}` + `\n`;
  } else {
    answer += `${" ".repeat(input - i)}` + `${"*".repeat(i)}`;
  };
};

console.log(answer);
