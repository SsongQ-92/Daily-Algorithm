// https://school.programmers.co.kr/learn/courses/30/lessons/42586?language=javascript

function solution(progresses, speeds) {
  const daysNeeded = progresses.map((progress, idx) => 
    Math.ceil((100 - progress) / speeds[idx])
  );

  const result = [];
  let currentMaxDay = daysNeeded[0];
  let count = 1;

  for (let i = 1; i < daysNeeded.length; i++) {
    if (daysNeeded[i] <= currentMaxDay) {
      count++;
    } else {
      result.push(count);
      currentMaxDay = daysNeeded[i];
      count = 1;
    }
  }

  result.push(count);

  return result;
}
