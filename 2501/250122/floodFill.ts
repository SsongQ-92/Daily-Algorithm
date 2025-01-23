// https://leetcode.com/problems/flood-fill/description/

function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
  const visited = new Set<string>();
  const queue = [[sr, sc]];
  const result = structuredClone(image);

  const findAdjacent = (array: number[]) => {
    const top = [array[0], array[1] + 1];
    const bottom = [array[0], array[1] - 1];
    const left = [array[0] - 1, array[1]];
    const right = [array[0] + 1, array[1]];

    return [top, bottom, left, right];
  }

  while (queue.length > 0) {
    const target = queue.shift();

    if (target && !visited.has(target.toString())) {
      const row = target[0];
      const column = target[1];

      if (image[row][column] === image[sr][sc]) {
        result[row][column] = color;

        const adjacentTargets = findAdjacent(target);
  
        for (const adjacent of adjacentTargets) {
          const row = adjacent[0];
          const column = adjacent[1];
  
          const isValidRow = row >= 0 && image.length > row;
          const isValidColumn = column >= 0 && image[0].length > column;
  
          if (isValidRow && isValidColumn && !visited.has(adjacent.toString())) {
            queue.push(adjacent);
          }
        }
      }

      visited.add(target.toString());
    }
  }

  return result;
};

/**
 * 좀 더 효율적인 방식
 */

function floodFill2(image: number[][], sr: number, sc: number, color: number): number[][] {
  const rows = image.length;
  const cols = image[0].length;

  const result = image.map(row => [...row]);

  const initialColor = image[sr][sc];
  if (initialColor === color) return result; 

  const visited: boolean[][] = Array.from({ length: rows }, () => Array(cols).fill(false));
  const queue: [number, number][] = [[sr, sc]];

  const directions = [
    [0, 1],  // 오른쪽
    [0, -1], // 왼쪽
    [1, 0],  // 아래
    [-1, 0], // 위
  ];

  while (queue.length > 0) {
    const [row, col] = queue.shift()!;

    if (!visited[row][col]) {
      visited[row][col] = true;
      result[row][col] = color;

      for (const [dx, dy] of directions) {
        const newRow = row + dx;
        const newCol = col + dy;

        if (
          newRow >= 0 &&
          newRow < rows &&
          newCol >= 0 &&
          newCol < cols &&
          !visited[newRow][newCol] &&
          image[newRow][newCol] === initialColor
        ) {
          queue.push([newRow, newCol]);
        }
      }
    }
  }

  return result;
}

