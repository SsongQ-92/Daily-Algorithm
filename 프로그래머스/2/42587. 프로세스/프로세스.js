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