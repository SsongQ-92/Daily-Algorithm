function solution(array1, array2) {
  const answer = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < array1.length && p2 < array2.length) {
    if (array1[p1] <= array2[p2]) {
      answer.push(array1[p1++]);
    } else {
      answer.push(array2[p2++]);
    }
  }

  if (p1 === array1.length) {
    for (let i = p2; i < array2.length; i++) {
      answer.push(array2[i]);
    }
  } else {
    for (let i = p1; i < array1.length; i++) {
      answer.push(array1[i]);
    }
  }

  return answer;
}

console.log(solution([1, 3, 5], [2, 3, 6, 7, 9]));
