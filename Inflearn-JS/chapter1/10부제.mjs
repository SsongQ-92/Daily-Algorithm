function solution(day, cars) {
  let count = 0;

  for (let i = 0; i < cars.length; i++) {
    const checkNum = cars[i] % 10;
    if (day === checkNum) {
      count++;
    }
  }

  return count;
}

console.log(solution(3, [25, 23, 11, 47, 53, 17, 33]));
