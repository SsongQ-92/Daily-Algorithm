const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './text.txt';
const input = fs.readFileSync(path).toString().trim();

const alphabet = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
let str = input;

for (let i = 0; i < 8; i++) {
  str = str.replaceAll(alphabet[i], "a");
}

console.log(str.length);
