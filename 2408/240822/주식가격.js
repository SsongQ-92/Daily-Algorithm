/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42584
 *
 * Pseudo Code
 *
 * 1. 반복문을 돈다
 * 2. 반복문 안에서 two pointers를 정한다
 * 3. 출발 기준 index와 가격이 떨어진 시점의 차이를 result 배열에 push한다
 * 4. 만약 마지막 index에 도착하면 그냥 마지막 index와 처음 출발한 index의 차이를 push한다
 *
 * @param {number[]} prices
 * @returns
 */
function solution(prices) {
  let answer = [];

  for (let i = 0; i < prices.length; i++) {
    const startPrice = prices[i];

    for (let j = i + 1; j < prices.length; j++) {
      if (startPrice > prices[j]) {
        answer.push(j - i);
        break;
      }
    }

    if (i + 1 !== answer.length) answer.push(prices.length - 1 - i);
  }

  return answer;
}
