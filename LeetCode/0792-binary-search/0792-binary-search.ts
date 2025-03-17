function search(nums: number[], target: number): number {
    let result = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
    }

    return result;
};