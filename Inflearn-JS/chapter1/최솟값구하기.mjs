function solution(array) {
  let answer = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < array.length; i++) {
    if (answer > array[i]) {
      answer = array[i];
    }
  }

  return answer;
}

console.log(solution([5, 3, 7, 11, 2, 15, 17]));
