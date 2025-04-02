function solution(arr1, arr2) {
    const answer = [];
    const resultRowNum = arr1.length;
    const resultColNum = arr2[0].length;
    
    for (let i = 0; i < resultRowNum; i++) {
        const row = [];
        let sum = 0;
        const commonLength = arr1[i].length;
        
        for (let j = 0; j < resultColNum; j++) {
            let col = 0;
            
            for (let k = 0; k < commonLength; k++) {
                col += arr1[i][k] * arr2[k][j];
            }
            
            row.push(col);
        }
        
        answer.push(row);
    }
    
    return answer;
}