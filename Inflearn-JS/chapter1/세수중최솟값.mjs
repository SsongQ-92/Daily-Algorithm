function solution(array) {
  let answer = Number.MAX_SAFE_INTEGER; 

  for (let i = 0; i < array.length; i++) {
    if (answer > array[i]) {
      answer = array[i];
    }
  }

  return answer;
}

console.log(solution([6, 5, 11]));
