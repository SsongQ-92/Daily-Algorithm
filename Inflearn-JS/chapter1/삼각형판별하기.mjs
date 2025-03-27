function solution(array) {
  let sortedArray = array.slice().sort((a, b) => a - b);

  if (sortedArray[0] + sortedArray[1] > sortedArray[2]) {
    return true;
  }

  return false;
}

console.log(solution([6, 7, 11]));
console.log(solution([13, 33, 17]));
