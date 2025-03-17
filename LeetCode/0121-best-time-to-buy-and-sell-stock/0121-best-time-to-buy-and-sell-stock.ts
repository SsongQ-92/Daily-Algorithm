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
