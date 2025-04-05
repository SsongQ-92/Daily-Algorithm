function solution(str1, str2) {
    const isAlphabet = (ch) => {
        const code = ch.charCodeAt(0);
        return code >= 97 && code <= 122;
    };

    const makeMultiSet = (str) => {
        const result = {};
        str = str.toLowerCase();

        for (let i = 0; i < str.length - 1; i++) {
            const a = str[i];
            const b = str[i + 1];

            if (isAlphabet(a) && isAlphabet(b)) {
                const pair = a + b;
                result[pair] = (result[pair] ?? 0) + 1;
            }
        }

        return result;
    };

    const map1 = makeMultiSet(str1);
    const map2 = makeMultiSet(str2);

    const allKeys = new Set([...Object.keys(map1), ...Object.keys(map2)]);
    let intersection = 0;
    let union = 0;

    allKeys.forEach((key) => {
        const count1 = map1[key] ?? 0;
        const count2 = map2[key] ?? 0;

        intersection += Math.min(count1, count2);
        union += Math.max(count1, count2);
    });

    if (union === 0) return 65536;
    return Math.floor((intersection / union) * 65536);
}
