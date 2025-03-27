function solution(number) {
  const SET = 12;

  return Math.ceil(number / SET);
}

console.log(solution(25));
console.log(solution(178));
