/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let result = {}
    const dfs = (nums, idx, subset) => {
        if(nums.length === idx) {
            let sorted = subset;
            if(!result[sorted]) result[sorted] = sorted;
        } else {
            dfs(nums, idx + 1, subset, result);
            dfs(nums, idx + 1, [...subset, nums[idx]], result);
        }
    }

    dfs(nums.sort(), 0, [], {})
    return Object.values(result);
};
