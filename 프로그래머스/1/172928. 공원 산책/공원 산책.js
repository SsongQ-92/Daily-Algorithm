function solution(park, routes) {
  const height = park.length;
  const width = park[0].length;

  let x = 0, y = 0;
  for (let i = 0; i < height; i++) {
    const idx = park[i].indexOf('S');
    if (idx !== -1) {
      x = i;
      y = idx;
      break;
    }
  }

  const direction = {
    N: [-1, 0],
    S: [1, 0],
    W: [0, -1],
    E: [0, 1],
  };

  for (const route of routes) {
    const [dir, distStr] = route.split(" ");
    const dist = parseInt(distStr);
    const [dx, dy] = direction[dir];

    let nx = x;
    let ny = y;
    let canMove = true;

    for (let i = 1; i <= dist; i++) {
      const tx = x + dx * i;
      const ty = y + dy * i;

      if (tx < 0 || tx >= height || ty < 0 || ty >= width || park[tx][ty] === 'X') {
        canMove = false;
        break;
      }
    }

    if (canMove) {
      x += dx * dist;
      y += dy * dist;
    }
  }

  return [x, y];
}
