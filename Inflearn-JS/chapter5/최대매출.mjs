function solution(days, array) {
  let answer = 0;
  let prevSum = 0;

  for (let i = days - 1; i < array.length; i++) {
    if (i === days - 1) {
      let j = 0;

      while (j <= i) {
        prevSum += array[j++];
      }
    } else {
      prevSum -= array[i - days];
      prevSum += array[i];
    }

    answer = Math.max(answer, prevSum);
  }

  return answer;
}

console.log(solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));
