function solution(str) {
  let answer = "";
  let maxScore = 0;
  const memo = {};

  for (const val of str) {
    memo[val] = (memo[val] ?? 0) + 1;
  }

  for (const [key, val] of Object.entries(memo)) {
    if (maxScore < val) {
      maxScore = val;
      answer = key;
    }
  }

  return answer;
}

console.log(solution("BACBACCACCBDEDE"));
