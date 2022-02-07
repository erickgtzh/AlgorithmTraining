/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const results = [];
    const dfs = (nums, leaf, idx) => {
        if(idx === nums.length){
            results.push([...leaf]);
            return;
        }
        
        // exclude
        dfs(nums, leaf, idx + 1);
        
        //include
        leaf.push(nums[idx])
        dfs(nums, leaf, idx + 1);
        leaf.pop();
    }
    dfs(nums, [], 0);
    return results;
};

nums = [1,2,3]
subsets(nums)