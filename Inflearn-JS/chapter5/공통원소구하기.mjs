function solution(array1, array2) {
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);

  const answer = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < array1.length && p2 < array2.length) {
    if (array1[p1] > array2[p2]) {
      p2++;
    } else if (array1[p1] < array2[p2]) {
      p1++;
    } else {
      answer.push(array1[p1]);
      p1++;
      p2++;
    }
  }

  return answer;
}

console.log(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));
