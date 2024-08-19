/**
 * Pseudo Code
 *
 * 1. 우선 결과값을 넣을 result 변수와 합 sum 변수 하나를 선언한다
 * 2. p1은 배열 전체를 순회할건데, sum 변수가 목표되는 특정숫자보다 크거나 같으면 p1++ 할거다
 * 2-1. 만약에 sum 변수가 특정숫자와 같으면, result++ 하고 p1++ 한다
 * 2-2. 만약에 sum 변수가 특정숫자와 다르면, 그냥 p1++ 한다
 * 3. p2변수는 sum 변수가 특정숫자보다 작을 경우, p1과 같은 자리에서부터 출발해서 계속 p2++된다
 * 4. 계속 p2++되며, arr[p2]를 sun변수에 합하여 결과값을 누적한다
 * 5. 위의 절차를 계속 반복하여 마지막에는 result 변수를 출력한다
 *
 * 시간복잡도 = O(n^2)
 *
 * @param {number[]} arr 주어진 배열
 * @param {number} m 목표되는 특정숫자
 */
function solution1(arr, m) {
  let result = 0;
  let p1 = 0;
  let sum = 0;

  while (p1 < arr.length) {
    let p2 = p1;
    sum = 0;

    while (sum < m) {
      sum += arr[p2];
      p2++;
    }

    if (sum === m) result++;
    p1++;
  }

  return result;
}

console.log(solution1([1, 2, 1, 3, 1, 1, 1, 2], 6));

// 진짜 two pointers algorithm (O(n))
function solution2(arr, m) {
  let result = 0;
  let lt = 0;
  let rt = lt;
  let sum = 0;

  while (rt < arr.length) {
    if (rt === 0) sum += arr[rt];

    // while문에 처음 들어오면 sum과 m을 비교한다

    if (sum < m) {
      // m보다 합이 작으면 rt를 증가시킨 후 sum에 arr[rt] 누적
      rt++;
      sum += arr[rt];
    } else if (sum > m) {
      // m보다 합이 크면 arr[lt]를 sum에서 빼준 후 lt++
      sum -= arr[lt];
      lt++;
    } else {
      // m과 합이 같으면 result++ 해주고 arr[lt]를 sum에서 빼준 후 lt++
      result++;
      sum -= arr[lt];
      lt++;
    }
  }

  return result;
}

console.log(solution2([1, 2, 1, 3, 1, 1, 1, 2], 6));
