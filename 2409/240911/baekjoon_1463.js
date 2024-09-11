const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './text.txt';
const input = Number(fs.readFileSync(path).toString().trim());

let answer;
const dynamicArray = Array(input + 1).fill(Number.MAX_SAFE_INTEGER);

dynamicArray[1] = 0;
dynamicArray[2] = 1;
dynamicArray[3] = 1;

for (let i = 4; i <= input; i++) {
  const numberOne = i - 1;
  const numberTwo = i % 2 === 0 ? i / 2 : null;
  const numberThree = i % 3 === 0 ? i / 3 : null;

  dynamicArray[i] = Math.min(dynamicArray[numberOne], dynamicArray[numberTwo ?? 0], dynamicArray[numberThree ?? 0]) + 1;
}

answer = dynamicArray[input];

console.log(answer);

/* 
dy[1] => 0
dy[2] => 2로 나누면 되니까, 1
dy[3] => 3으로 나누면 되니까, 1
dy[4] => dy[2] 또는 dy[3]으로 만들기? dy[2]와 dy[3]의 값이 같으니 어떤 것으로 해도 상관없을 듯, 나누기 2해서 dy[2] 또는 -1해서 dy[3], 2
dy[5] => 3으로 나누어지지 않으니까, dy[4]로 가자, 3
dy[6] => 2 또는 3으로 나누었을 때, dy[3] 또는 dy[2], 둘다 1이니까, 2
dy[7] => 3으로도 나누어지지 않고, 2로도 나누어지지 않지만, dy[6]이 2니까, 3
dy[8] => dy[4]가 2니까, 3
dy[9] => dy[3]이 1이니까, 2
dy[10] => dy[9]가 2니까, 3
*/