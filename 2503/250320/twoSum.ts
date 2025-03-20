function twoSum(nums: number[], target: number): number[] {
  let answer = [] as number[];

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        answer.push(i, j);
        break;
      }
    }
  }

  return answer;
};
