const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './text.txt';
const input = Number(fs.readFileSync(file).toString());

function factorial(n) {
  if (n === 0) return 1;
  else if (n <= 2) return n;

  return n * factorial(n - 1);
}

console.log(factorial(input));