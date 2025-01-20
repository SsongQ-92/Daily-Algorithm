// https://leetcode.com/problems/two-sum/description/

function twoSum(nums: number[], target: number): number[] | undefined {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      } 
    }
  }
};

/**
 * 시간 복잡도 O(n)의 방법
 * 
 * 현재 인덱스의 값을 target에서 빼서 Map에 저장된 이전 인덱스들의 값들과 비교
 */
function twoSum2(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
        return [map.get(complement)!, i];
    }

    map.set(nums[i], i);
  }

  throw new Error("No two sum solution"); 
}
