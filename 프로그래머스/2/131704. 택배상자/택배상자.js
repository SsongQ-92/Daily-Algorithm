function solution(order) {
  const stack = [];
    
  let count = 0;
  let current = 1;
  let i = 0;

  while (i < order.length) {
    if (current === order[i]) {
      count++;
      current++;
      i++;
    } else if (stack[stack.length - 1] === order[i]) {
      stack.pop();
      count++;
      i++;
    } else if (current <= order.length) {
      stack.push(current++);
    } else {
      break;
    }
  }

  return count;
}
