/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let result;

    if (!nums.length) return init;

    for (let i = 0; i < nums.length; i++) {
        i === 0 ? result = fn(init,nums[i]) : result = fn(result,nums[i])
    }

    return result;
};