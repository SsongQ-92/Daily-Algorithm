const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './text.txt';
const [numbers, ...arr] = fs.readFileSync(path).toString().trim().split('\n');

const N = Number(numbers.split(" ")[0]);
const M = Number(numbers.split(" ")[1]);
const MAZE = arr.map(row => row.split("").map(Number));

// 방향 벡터 (상, 하, 좌, 우)
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

// BFS 큐
let queue = [[0, 0]];
let visited = Array.from({ length: N }, () => Array(M).fill(false));

visited[0][0] = true;

// BFS 탐색
while (queue.length) {
  const [x, y] = queue.shift();

  // 네 방향으로 탐색
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    // 범위 밖이면 무시
    if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
    // 벽이거나 이미 방문한 곳이면 무시
    if (MAZE[nx][ny] === 0 || visited[nx][ny]) continue;

    // 새로운 좌표에 이동거리 저장
    MAZE[nx][ny] = MAZE[x][y] + 1;
    visited[nx][ny] = true;

    queue.push([nx, ny]);
  }
}

// 도착점까지의 최단 경로 출력
console.log(MAZE[N-1][M-1]);