function solution(array) {
  let answer = 0;
  let tall = 0;

  for (let i = 0; i < array.length; i++) {
    if (i === 0 || array[i] > tall) {
      answer++;
    }

    if (array[i] > tall) {
      tall = array[i];
    }
  }

  return answer;
}

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]));
