function solution(array) {
  let answer = [];
  
  const standard = array[0].slice();
  const checkList = array.slice(1);

  for (let i = 0; i < standard.length - 1; i++) {
    for (let j = i + 1; j < standard.length; j++) {
      const mentor = standard[i];
      const mentee = standard[j];
      let isGoodRelationship = true;

      for (let k = 0; k < checkList.length; k++) {
        const mentorRank = checkList[k].findIndex(v => v === mentor);
        const menteeRank = checkList[k].findIndex(v => v === mentee);

        if (mentorRank > menteeRank) {
          isGoodRelationship = false;
          break;
        }
      }

      if (isGoodRelationship) {
        answer.push([mentor, mentee]);
      }
    }
  }

  return answer.length;
}

console.log(solution([
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2]
]));
