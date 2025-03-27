function solution(limit, array) {
  let answer = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < array.length; i++) {
    const sumArr = array.map((val, idx) => {
      if (idx === i) {
        return val[0]/2 + val[1];
      } else {
        return val[0] + val[1];
      }
    }).sort((a, b) => a - b);

    let count = 0;
    let price = 0;

    for (const cost of sumArr) {
      if (price + cost > limit) break;
      price += cost;
      count++;
    }

    answer = Math.max(answer, count);
  }

  return answer;
}

console.log(solution(33, [[2, 12], [8, 4], [6, 6], [6, 7]]));
