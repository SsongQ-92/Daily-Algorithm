function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    const isSquare = Number.isInteger(Math.sqrt(i));
    answer += isSquare ? -i : i;
  }

  return answer;
}
