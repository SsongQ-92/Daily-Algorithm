function solution(k, array) {
  let result = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < array.length - k + 1; i++) {
    const SALES = array[i] + array[i + 1] + array[i + 2];
    if (SALES > result) result = SALES;
  }

  return result;
}

console.log(solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));

/**
 * 와 이게 Sliding Window 구나..
 *
 * 더해놓고 쭉 가면서 더하고 빼고 하는식으로만 해서
 * 기존에 넣어 놓은 값과 비교하는구나..
 * k의 개수가 엄청 커지면 이 방식이 엄청나게 효율적일듯
 * @param {number} k
 * @param {number[]} arr
 * @returns {number}
 */
function solutionTeacher(k, arr) {
  let answer,
    sum = 0;
  for (let i = 0; i < k; i++) sum += arr[i];
  answer = sum;
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }
  return answer;
}
