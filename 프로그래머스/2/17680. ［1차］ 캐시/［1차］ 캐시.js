function solution(cacheSize, cities) {
    let answer = 0;
    const cache = new Map();
    
    if (cacheSize === 0) {
        return cities.length * 5;
    }
    
    for (const city of cities) {
        const upperCasedWord = city.toUpperCase();
        const citiesList = Array.from(cache.keys());
        const isCached = citiesList.includes(upperCasedWord);
        
        if (isCached) {
            cache.delete(upperCasedWord);

            cache.set(upperCasedWord, 1);
            answer += 1;
            continue;
        } 
        
        if (cache.size < cacheSize) {
            cache.set(upperCasedWord, 1);
            answer += 5;
            continue;
        }
        
        const theOldestCached = citiesList[0];
        cache.delete(theOldestCached);
        cache.set(upperCasedWord, 1);
        answer += 5;
    }
  
    return answer;
}
