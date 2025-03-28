function solution(target, array) {
  let count = 0;
  let left = 0;
  let sum = 0;

  for (let right = 0; right < array.length; right++) {
    let tempSum;
    let tempLeft = left;
    
    sum += array[right];

    tempSum = sum;

    while (tempLeft <= right) {
      if (tempSum <= target) {
        count++;
      }

      tempSum -= array[tempLeft++];
    }

    while (sum > target) {
      sum -= array[left++];
    }
  }

  return count;
}

console.log(solution(5, [1, 3, 1, 2, 3]));
