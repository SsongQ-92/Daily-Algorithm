function solution(s, t) {
  let answer = [];
  let distance = null;
  let isMeetTOnce = false;
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) {
      answer.push(0);
      distance = 1;
      isMeetTOnce = true;
    } else {
      answer.push(distance);
      if (isMeetTOnce) {
        distance++;
      }
    }
  }

  distance = null;
  isMeetTOnce = false;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      distance = 1;
      isMeetTOnce = true;
    } else {
      if (isMeetTOnce) {
        answer[i] = answer[i] === null ? distance : Math.min(distance, answer[i]);
        distance++;
      }
    }
  }

  return answer;
}

console.log(solution("teachermode", "e"));
