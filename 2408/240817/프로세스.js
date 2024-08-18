/**
 * Pseudo Code
 *
 * 1. 빈 배열를 만들어서, 실행되는 순서대로 push 하는걸로 풀어야겠다. 또 우리가 찾는 location 요소를 tracking하는 변수(numberWeFind) 하나를 만든다
 * 2. 대기중인 프로세스 하나를 꺼내서, 자기보다 높은 숫자가 있는지 체크한다
 * 3. find 메소드를 쓰면 될 것 같다
 * 4. 만약 numberWeFind가 0이 아니면
 * 4-1. find 메소드를 써서 undefined가 아닌 값이 나오면, 요소를 priorities에 푸쉬하고 priorities.shift한다
 * 4-2. find 메소드를 써서 undefined가 나오면, 요소를 result에 푸쉬하고 priorities.shift한다
 * 5. 만약 numberWeFind가 0이면 본인의 차례이므로,
 * 5-1. find 메소드를 써서 undefined가 아닌 값이 나오면, 요소를 priorities에 푸쉬하고 priorities.shift한다
 * 5-2. find 메소드를 써서 undefined가 나오면, 요소를 result에 푸쉬하고 priorities.shift한다
 *
 * 마지막에는 priorities[location] 요소를 해당 실행되는 배열의 indexOf()로 index를 찾으면 될 것 같다
 *
 * @param {number[]} priorities
 * @param {number} location
 * @returns
 */
function solution(priorities, location) {
  let answer = 0;
  let result = [];

  let length = priorities.length;
  let numberWeFind = location;

  while (length) {
    const TARGET = priorities[0];
    const BIGGER_Number = priorities.find((v) => v > TARGET);

    if (numberWeFind) {
      numberWeFind -= 1;

      if (BIGGER_Number) {
        priorities.push(TARGET);
        priorities.shift();
      } else {
        result.push(TARGET);
        priorities.shift();
        length -= 1;
      }
    } else {
      if (BIGGER_Number) {
        priorities.push(TARGET);
        priorities.shift();

        numberWeFind = length - 1;
      } else {
        result.push(TARGET);
        priorities.shift();
        length -= 1;

        numberWeFind = result.length - 1;
        break;
      }
    }
  }

  answer = numberWeFind + 1;

  return answer;
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
