/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let ans = [];
    nums.sort((a,b) => a-b);
    nums.forEach((el, index)=>{
        el === target && ans.push(index)
    })
    return ans;
};
