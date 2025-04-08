function solution(today, terms, privacies) {
    const answer = [];

    const toDays = (dateStr) => {
        const [year, month, day] = dateStr.split('.').map(Number);
        return year * 12 * 28 + month * 28 + day;
    };

    const todayInDays = toDays(today);

    const termMap = new Map();
    for (const term of terms) {
        const [type, period] = term.split(' ');
        termMap.set(type, Number(period));
    }

    privacies.forEach((privacy, index) => {
        const [date, type] = privacy.split(' ');
        const expireDateInDays = toDays(date) + termMap.get(type) * 28 - 1;

        if (expireDateInDays < todayInDays) {
            answer.push(index + 1);
        }
    });

    return answer;
}
