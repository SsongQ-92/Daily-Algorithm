const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './text.txt';
const input = Number(fs.readFileSync(path).toString().trim());

// DP 공부하기 => 문제 포기
