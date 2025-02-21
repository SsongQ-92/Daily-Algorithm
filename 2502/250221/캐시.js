// https://school.programmers.co.kr/learn/courses/30/lessons/17680

function solution(cacheSize, cities) {
  let answer = 0;
  const cache = new Map();
  
  if (cacheSize === 0) return cities.length * 5;
  
  for (let city of cities) {
    city = city.toLowerCase();
    
    if (cache.has(city)) {
      answer += 1; 

      cache.delete(city);
      cache.set(city, true);
    } else {
      answer += 5;  

      if (cache.size === cacheSize) {
        const firstKey = cache.keys().next().value;
        cache.delete(firstKey);
      }

      cache.set(city, true);
    }
  }
  
  return answer;
}
