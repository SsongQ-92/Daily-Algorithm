// https://school.programmers.co.kr/learn/courses/30/lessons/76502

function solution(s) {
  let answer = 0;
  const n = s.length;

  function isValid(str) {
    const stack = [];
    
    for (let char of str) {
      if (char === '(' || char === '{' || char === '[') {
        stack.push(char);
      } else {
        if (!stack.length) return false;
        
        const top = stack.pop();
        if (char === ')' && top !== '(') return false;
        if (char === '}' && top !== '{') return false;
        if (char === ']' && top !== '[') return false;
      }
    }
    
    return stack.length === 0;
  }
  
  for (let i = 0; i < n; i++) {
    const rotated = s.slice(i) + s.slice(0, i);
    if (isValid(rotated)) answer++;
  }
  
  return answer;
}
