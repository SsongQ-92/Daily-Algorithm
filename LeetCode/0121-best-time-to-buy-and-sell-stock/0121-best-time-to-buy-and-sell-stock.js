/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
    if (prices.length === 1) return 0;
    
    let answer = 0;
    let boughtStock = prices[0];
    
    for (let i = 1; i < prices.length; i++) {
        const stock = prices[i];
        
        if (stock < boughtStock) {
            boughtStock = stock;
            continue;
        } else {
            const diff = stock - boughtStock;
            
            answer = Math.max(answer, diff);
        }
    }
        
    return answer;
};
