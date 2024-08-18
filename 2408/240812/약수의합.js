function solution(n) {
  let answer = 0;
  let list = [];

  for (let i = 1; i <= n; i++) {
    const ZERO = 0;

    if (n % i === ZERO) {
      list.push(i);
    }
  }

  for (let j = 0; j < list.length; j++) {
    answer += list[j];
  }

  return answer;
}

console.log(solution(12));
console.log(solution(5));
