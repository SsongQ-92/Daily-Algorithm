/**
 * Pseudo Code
 *
 * 1. 두 배열을 합친 새로운 배열 생성 후 sort하기 => sort의 시간복잡도 O(nlog(n))
 * 2. arr1, arr2의 첫번째 요소 비교 후 빈 배열에 push(n) => shift의 시간복잡도 O(n^2)
 *
 * 따라서 Two pointer algorithm으로 O(n) 시간복잡도가 나오게 해야한다
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 */
function solution1(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

console.log(solution1([1, 3, 5], [2, 3, 6, 7, 9]));

function solution2(arr1, arr2) {
  const result = [];

  while (arr1.length || arr2.length) {
    const ARR1_EL = arr1[0];
    const ARR2_EL = arr2[0];

    if (arr1.length === 0) {
      result.push(...arr2);
      break;
    }
    if (arr2.length === 0) {
      result.push(...arr1);
      break;
    }

    if (ARR1_EL > ARR2_EL) {
      result.push(ARR2_EL);
      arr2.shift();
    } else if (ARR1_EL < ARR2_EL) {
      result.push(ARR1_EL);
      arr1.shift();
    } else {
      result.push(ARR1_EL);
      arr1.shift();
    }
  }

  return result;
}

console.log(solution2([1, 3, 5], [2, 3, 6, 7, 9]));

function solution3(arr1, arr2) {
  const result = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] >= arr2[j]) {
      result.push(arr2[j]);
      j++;
    } else {
      result.push(arr1[i]);
      i++;
    }
  }

  if (i < arr1.length) {
    for (let x = i; x < arr1.length; x++) {
      result.push(arr1[x]);
    }
  }

  if (j < arr2.length) {
    for (let x = j; x < arr2.length; x++) {
      result.push(arr2[x]);
    }
  }

  return result;
}

console.log(solution3([1, 3, 5], [2, 3, 6, 7, 9]));
