/**
 * Two pointers Algorithm으로 풀어야되는데,
 * 반복은 while문을 돌면서 해야겠다 (rt가 마지막 인덱스를 넘어가기 전까지)
 *
 * 연속부분 수열에 대한 중복 상황이 없으므로,
 * lt와 rt를 가지고 lt의 값이 변하던, rt의 값이 변하던, 매번 검사하는 수순을 한 번의 검사로 간주한다
 *
 * 한 번의 검사마다 특정 숫자인 n과 값과 sum을 비교를 하여 n보다 값이 작거나 같으면 result를 1 올려준다
 *
 * ## 위와 같이 하려고 했지만, 방법을 바꿔야한다
 * ## 위와 같이 하면 한자리로만 가능한 경우들을 넣지 못하게 된다
 *
 * 그냥 각 인덱스마다 돌면서 j를 합에 더하며 체크하는 식으로 해야겠다
 *
 * @param {number} n 주어진 특정 숫자
 * @param {number[]} arr 배열
 * @returns
 */
function solution(n, arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    let j = i;

    while (j < arr.length) {
      sum += arr[j];
      if (sum <= n) {
        result++;
        j++;
      } else break;
    }
  }

  return result;
}

console.log(solution(5, [1, 3, 1, 2, 3]));

// O(n) Two pointers algorithm
function teacherSolution(m, arr) {
  let answer = 0,
    sum = 0,
    lt = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum > m) {
      sum -= arr[lt++];
    }
    answer += rt - lt + 1;
  }
  return answer;
}
