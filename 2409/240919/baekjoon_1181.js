const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './text.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

let answer = ``;

answer = [...new Set(input)].filter(v => { 
  return Object.is(parseInt(v), NaN); 
}).sort((a, b) => {
  if (a.length > b.length || a.length < b.length) {
    return a.length - b.length;
  } else if (a.length === b.length) {
    return a.localeCompare(b);
  } 
}).join("\n");

console.log(answer);