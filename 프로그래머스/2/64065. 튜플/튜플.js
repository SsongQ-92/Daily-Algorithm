function solution(s) {
    const answer = [];
    const arr = s.slice(2, -2).split("},{").map(v => v.split(","));
    const sortedArr = arr.sort((a, b) => a.length - b.length);
    
    for (let i = 0; i < sortedArr.length; i++) {
        if (i === 0) {
            answer.push(parseInt(sortedArr[i]));
            continue;
        }
        
        const map = new Map();
        for (let j = 0; j < sortedArr[i].length; j++) {
            const number = parseInt(sortedArr[i][j]);
            map.set(number, 1);
        }
        
        for (let j = 0; j < answer.length; j++) {
            map.delete(answer[j]);
        }
        
        const keyArr = Array.from(map.keys());
        answer.push(keyArr[0]);
    }
    
    return answer;
}