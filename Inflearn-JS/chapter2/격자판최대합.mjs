function solution(array) {
  let answer = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < array.length; i++) {
    let total1 = 0;
    let total2 = 0;

    for (let j = 0; j < array[i].length; j++) {
      total1 += array[i][j];
      total2 += array[j][i];
    }

    answer = Math.max(answer, total1, total2)
  }

  let diagonal1 = 0;
  let diagonal2 = 0;
  
  for (let i = 0; i < array.length; i++) {
    diagonal1 += array[i][i];
    diagonal2 += array[i][array.length - 1 - i];
  }

  answer = Math.max(answer, diagonal1, diagonal2);

  return answer;
}

console.log(solution([
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19]
  ]));
