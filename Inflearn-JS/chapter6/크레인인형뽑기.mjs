function solution(board, moves) {
  let answer = 0;
  const stack = [];

  for (const val of moves) {
    const col = val - 1;
    
    for (let row = 0; row < board.length; row++) {
      const doll = board[row][col];

      if (doll !== 0) {
        board[row][col] = 0;

        if (stack.at(-1) === doll) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(doll);
        }

        break;
      }
    }
  }

  return answer;
}

console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]));
