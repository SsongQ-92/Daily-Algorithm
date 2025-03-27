function solution(array) {
  let answer = 0;
  let score = 1;

  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      answer += score;
      score++;
    } else {
      score = 1;
    }
  }

  return answer;
}

console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
