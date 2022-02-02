/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    let ht = {};
    for(let i = 0; i < nums.length; i++) {
      let searching = target - nums[i];  
      if(searching in ht) {
        return [ht[searching], i];
      } 
      ht[nums[i]] = i;
    }
    return null;
};

let nums = [3,2,4];
let target = 6;
twoSum(nums, target)