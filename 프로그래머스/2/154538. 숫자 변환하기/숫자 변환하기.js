function solution(x, y, n) {
  const visited = new Array(y + 1).fill(false);
  const queue = [[x, 0]];
  let idx = 0;

  while (idx < queue.length) {
    const [cur, count] = queue[idx++];
    
    if (cur === y) return count;

    for (const next of [cur + n, cur * 2, cur * 3]) {
      if (next <= y && !visited[next]) {
        visited[next] = true;
        queue.push([next, count + 1]);
      }
    }
  }

  return -1;
}
