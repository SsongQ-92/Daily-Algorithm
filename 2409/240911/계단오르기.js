function solution(n) {
  let answer;
  const dynamicArray = Array(n + 1).fill(0);

  dynamicArray[1] = 1;
  dynamicArray[2] = 2;

  for (let i = 3; i <= n; i++) {
    dynamicArray[i] = dynamicArray[i - 1] + dynamicArray[i - 2];
  }

  answer = dynamicArray[n];
  return answer;
};

console.log(solution(7));

// 동적 계획법(DP)

/* 
큰 문제가 있을 때, 작은 단위의 문제들로 쪼개는 것!

이전 것을 이용해서 현재 것을 알 수 있는 => 점화식
1번 계단 가는 경우
2번 계단 가는 경우

dy라는 배열 만들기!
dy = [ , 1, 2, ]
dy[1] = 1
dy[2] = 2
dy[3] => 1번 계단에서 오거나 2번 계단에서 오는 방법 밖에 없음
- 1번 계단에서 오는 방법: 1가지
- 2번 계단에서 오는 방법: 2가지
dy[3] = 1 + 2

dy[4] => 2번 계단에서 오거나 3번 계단에서 오는 방법 밖에 없음
- 2번 계단에서 오는 방법: 2가지(dy[2])
- 3번 계단에서 오는 방법: 3가지(dy[3])
dy[4] = dy[2] + dy[3]
*/