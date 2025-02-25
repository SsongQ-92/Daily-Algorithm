// https://school.programmers.co.kr/learn/courses/30/lessons/131127

function solution(want, number, discount) {
  const needs = new Map();
  let answer = 0;

  for (let i = 0; i < want.length; i++) {
    needs.set(want[i], number[i]);
  }

  for (let i = 0; i <= discount.length - 10; i++) {
    const currentWindow = new Map();

    for (let j = i; j < i + 10; j++) {
        currentWindow.set(discount[j], (currentWindow.get(discount[j]) || 0) + 1);
    }

    let isValid = true;

    for (let [item, count] of needs) {
      if (currentWindow.get(item) !== count) {
        isValid = false;
        break;
      }
    }

    if (isValid) answer++;
  }

  return answer;
}

