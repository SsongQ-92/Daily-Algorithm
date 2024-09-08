const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split("\n"); // 런타임 에러(EACCES)로 인한 경로 수정

const A = Number(input[0]); 
const B = Number(input[1]);

let answer;

if (A > 0 && B > 0) answer = 1;
else if (A < 0 && B > 0) answer = 2;
else if (A < 0 && B < 0) answer = 3;
else if (A > 0 && B < 0) answer = 4;

console.log(answer);
