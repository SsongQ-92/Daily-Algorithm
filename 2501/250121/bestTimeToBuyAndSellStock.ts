// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

function maxProfit(prices: number[]): number {
  if (prices.length === 1) {
    return 0;
  }

  let p1 = 0;
  let p2 = p1 + 1;

  let min = prices[p1];
  let max = 0;

  while (p2 <= prices.length - 1) {
    const profit = prices[p2] - prices[p1];

    if (profit > max) {
      max = profit;
    }

    if (prices[p2] < min) {
      min = prices[p2];
      p1 = p2;
    }

    p2 += 1;
  }

  return max;
};

/**
 * 또 다른 방법
 * 
 * 조금 더 간단화시킨 방법 => 인덱스를 저장하지 않음
 */

function maxProfit2(prices: number[]): number {
  let minPrice = Infinity; // 초기값을 무한대로 설정
  let maxProfit = 0;       // 최대 이익 초기값

  for (const price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else {
      maxProfit = Math.max(maxProfit, price - minPrice);
    }
  }

  return maxProfit;
}
