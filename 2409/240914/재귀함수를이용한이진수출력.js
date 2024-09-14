function solution(n) {
  let answer = '';
  
  function dfs(n) {
    if (n === 1) {
      answer += 1;
      return;
    };
    
    answer += n % 2;
    
    dfs(Math.floor(n / 2));
  }

  dfs(n);

  return answer.split("").toReversed().join("");
}

console.log(solution(11))

function teacherSolution(n){
  let answer="";
  function DFS(n){
       if(n===0) return;
       else{
           DFS(parseInt(n/2));
           answer+=String(n%2);
       }
  }
  DFS(n);
  return answer;
}
