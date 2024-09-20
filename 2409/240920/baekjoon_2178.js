const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './text.txt';
const [numbers, ...arr] = fs.readFileSync(path).toString().trim().split('\n');

let answer = Number.MAX_SAFE_INTEGER;
let move = 0;
let nCoordinate = 0;
let mCoordinate = 0;
const N = numbers.split(" ").map(Number)[0] - 1;
const M = numbers.split(" ").map(Number)[1] - 1;
const MAZE = [];
const ifCheckedArray = Array.from({length: N + 1}, () => Array(M + 1).fill(null));

arr.forEach(v => {
  const newArr = v.split("").map(Number);
  MAZE.push(newArr);
});

function dfs(nCoordinate, mCoordinate, move, ifCheckedArray) {
  if (nCoordinate < 0 || nCoordinate > N || mCoordinate < 0 || mCoordinate > M) return;
  if (MAZE[nCoordinate][mCoordinate] === 0) return;
  if (ifCheckedArray[nCoordinate][mCoordinate] === true) return;
  if (nCoordinate === N && mCoordinate === M) {
    if (move < answer) answer = move;

    return;
  }
  
  ifCheckedArray[nCoordinate][mCoordinate] = true;

  const clonedIfCheckedArray = [];
  ifCheckedArray.forEach(v => {
    clonedIfCheckedArray.push(v.slice());
  })

  dfs(nCoordinate + 1, mCoordinate, move + 1, clonedIfCheckedArray);
  dfs(nCoordinate, mCoordinate + 1, move + 1, clonedIfCheckedArray);
  dfs(nCoordinate - 1, mCoordinate, move + 1, clonedIfCheckedArray);
  dfs(nCoordinate, mCoordinate - 1, move + 1, clonedIfCheckedArray);
}

dfs(nCoordinate, mCoordinate, move + 1, ifCheckedArray);

console.log(answer);

