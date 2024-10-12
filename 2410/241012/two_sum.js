function solution(nums, target) {
  let indexOne, indexTwo;

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const sum = nums[i] + nums[j];

      if (sum === target) {
        indexOne = i;
        indexTwo = j;
        break;
      }
    }

    if (indexOne !== undefined && indexTwo !== undefined) {
      break;
    }
  }

  return [indexOne, indexTwo];
}

console.log(solution([2, 7, 11, 15], 9));
