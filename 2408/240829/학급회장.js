/**
 * Pseudo Code
 *
 * 해쉬로 가자
 * @param {number} num 학생 수
 * @param {string} str 투표용지
 */
function solution(num, str) {
  const obj = {};
  let maxNum = Number.MIN_SAFE_INTEGER;
  let result;

  for (let el of str) {
    obj[el] = (obj[el] ?? 0) + 1;

    if (obj[el] > maxNum) {
      maxNum = obj[el];
      result = el;
    }
  }
  return result;
}

console.log(solution(15, "BACBACCACCBDEDE"));
