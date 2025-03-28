function solution(target, array) {
  let count = 0;
  let left = 0;
  let right = 0;
  let sum = array[right];

  while (right < array.length) {
    if (sum === target) {
      count++;
      sum += array[++right];
    } else if (sum > target) {
      sum -= array[left++];
    } else if (sum < target) {
      sum += array[++right];
    }
  }

  return count;
}

console.log(solution(6, [1, 2, 1, 3, 1, 1, 1, 2]));
