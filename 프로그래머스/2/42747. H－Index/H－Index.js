function solution(citations) {
    let answer = 0;
    const sortedCit = citations.slice().sort((a, b) => a - b);
    const len = sortedCit.length;
    let i = 0;
    
    while (i <= len) {
        let idxArray = -1;
        
        for (let j = 0; j < len; j++) {
            const number = sortedCit[j];
            
            if (i <= number) {
                idxArray = j;
                break;
            }
        }
        
        if (idxArray === -1) return answer;
        
        const moreNumber = len - idxArray;
        const lessNumber = len - moreNumber;
         
        if (moreNumber >= i && i >= lessNumber) {
            answer = i;
        }
            
        i++;
    }
    
    return answer;
}