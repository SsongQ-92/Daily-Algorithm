function solution(n, m, sections) {
    let count = 0;
    let i = 0;
    const len = sections.length;
    
    while (i < len) {
        count++;
        let paintEnd = sections[i] + m - 1; 
        i++;
        
        while (i < len && sections[i] <= paintEnd) {
            i++;
        }
    }
    
    return count;
}
