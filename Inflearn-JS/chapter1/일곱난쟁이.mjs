function solution(array) {
  let limit = 100;
  const totalTall = array.reduce((acc, val) => acc + val);
  const diff = totalTall - limit;
  
  const sortedArray = array.slice().sort((a, b) => a - b);
  let p1 = 0;
  let p2 = sortedArray.length - 1;

  while (true) {
    if (sortedArray[p1] + sortedArray[p2] === diff) {
      break;
    }

    if (sortedArray[p1] + sortedArray[p2] > diff) {
      p2--;
    } else {
      p1++;
    }
  }

  return sortedArray.filter((_, idx) => idx !== p1 && idx !== p2);
}

console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]));
