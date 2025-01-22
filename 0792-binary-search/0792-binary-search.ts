function search(nums: number[], target: number): number {
    let result = -1;

    nums.forEach((value, index) => {
        if (value === target) {
            result = index;
        }
    })

    return result;
};