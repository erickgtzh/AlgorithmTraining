/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let i = 0;
  let result = [];
  while(i < nums.length) {
    let j = nums[i] - 1;
    if(nums[i] !== nums[j] ) {
      [nums[i], nums[j]] = [nums[j], nums[i]]
    } else {
      i++;
    }
  }
  
  for(let i = 0; i < nums.length; i++){
    if(i+1 !== nums[i]){
      result.push(nums[i])
    }
  }
  return result;
};
