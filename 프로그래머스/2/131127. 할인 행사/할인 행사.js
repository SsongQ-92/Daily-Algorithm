function solution(want, number, discount) {
    let answer = 0;
    const consecutiveDays = 10;
    const len = discount.length;
    
    for (let i = 0; i < (len - consecutiveDays + 1); i++) {
        const map = new Map();
        
        for (let j = 0; j < want.length; j++) {
            map.set(want[j], number[j]);
        }
        
        for (let j = i; j < i + consecutiveDays; j++) {
            if (!map.get(discount[j])) break;
            
            map.set(discount[j], map.get(discount[j]) - 1);
        }
        
        const mapValues = Array.from(map.values());
        let allZero = true;
        for (let j = 0; j < mapValues.length; j++) {
            if (mapValues[j] !== 0) {
                allZero = false;
                break;
            }
        }
        
        if (allZero === true) answer++;
    }
    
    
    return answer;
}