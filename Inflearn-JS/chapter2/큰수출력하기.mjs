function solution(array) {
  const answer = [];

  for (let i = 0; i < array.length; i++) {
    if (i === 0 || array[i] > array[i - 1]) {
      answer.push(array[i]);
    }
  }

  return answer;
}

console.log(solution([7, 3, 9, 5, 6, 12]));
