function solution(topping) {
  const rightToppings = new Map();
  let leftToppings = new Set();
  let answer = 0;

  topping.forEach(t => {
    rightToppings.set(t, (rightToppings.get(t) || 0) + 1);
  });

  for (let i = 0; i < topping.length - 1; i++) {
    leftToppings.add(topping[i]);
    
    rightToppings.set(topping[i], rightToppings.get(topping[i]) - 1);
    
    if (rightToppings.get(topping[i]) === 0) {
      rightToppings.delete(topping[i]);
    }

    if (leftToppings.size === rightToppings.size) {
      answer++;
    }
  }

  return answer;
}
