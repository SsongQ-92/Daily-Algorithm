/**
 * Pseudo Code
 *
 * 1. 배열이 오름차순으로 주어지는 것이 아니므로 2중 for문을 돌아야 하는가? 그렇다면 O(n^2)일텐데
 * 2. 아니면 각각을 오름차순으로 정렬해놓고(O(nlong(n))), two pointers로 돌리면 될수도
 * 3. O(n)이 나올 수 있는 방법이 있나?
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 */
function solution(arr1, arr2) {
  const result = [];
  let p1 = 0,
    p2 = 0;

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] > arr2[p2]) p2++;
    else if (arr1[p1] < arr2[p2]) p1++;
    else {
      result.push(arr1[p1]);
      p1++;
      p2++;
    }
  }

  return result;
}

console.log(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));
