// https://leetcode.com/problems/binary-search/description/

function search(nums: number[], target: number): number {
  let result = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }

  return result;
};

/**
 * 이진 탐색
 */

function search2(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid; // 목표 값 찾음
    } else if (nums[mid] < target) {
      left = mid + 1; // 오른쪽 절반 탐색
    } else {
      right = mid - 1; // 왼쪽 절반 탐색
    }
  }

  return -1; // 목표 값이 배열에 없음
}

