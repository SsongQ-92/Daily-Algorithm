function solution(array) {
  let answer = 0;

  for (let i = 0; i < array.length; i++) {
    array[i].unshift(0);
    array[i].push(0);
  }

  array.unshift(Array.from({ length: array.length + 2 }, () => 0));
  array.push(Array.from({ length: array.length + 2 }, () => 0));

  for (let i = 1; i < array.length - 1; i++) {
    for (let j = 1; j < array[i].length - 1; j++) {
      const height = array[i][j];
      if (height > array[i - 1][j] && height > array[i + 1][j] && height > array[i][j - 1] && height > array[i][j + 1]) {
        answer++;
      }
    }
  }

  return answer;
}

console.log(solution([
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2]
]));
