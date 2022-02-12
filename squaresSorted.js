/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let lo = 0;
    let hi = nums.length - 1;
    let orderedSqrt = [];
    
    while(lo <= hi) {
        if(Math.pow(nums[lo], 2) >= Math.pow(nums[hi],2)) {
            orderedSqrt.unshift(Math.pow(nums[lo], 2))
            lo++;
        }else {
            orderedSqrt.unshift(Math.pow(nums[hi], 2))
            hi--;
        }
    }
    return orderedSqrt;
};
