function solution(k, array) {
  const sumArray = [];

  for (let i = 0; i < array.length - 2; i++) {
    for (let j = i + 1; j < array.length - 1; j++) {
      for (let k = j + 1; k < array.length; k++) {
        sumArray.push(array[i] + array[j] + array[k]);
      }
    }
  }

  return [...new Set(sumArray)].sort((a, b) => b - a)[k - 1];
}

console.log(solution(3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]));
