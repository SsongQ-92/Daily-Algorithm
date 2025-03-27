function solution(array) {
  let answer = '';

  for (let i = 0; i < array.length; i++) {
    const word = array[i];
    if (word.length > answer.length) {
      answer = word;
    }
  }

  return answer;
}

console.log(solution(["teacher", "time", "student", "beautiful", "good"]));
