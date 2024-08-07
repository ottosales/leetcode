// 1. Two Sum
// https://leetcode.com/problems/two-sum/
// respects follow-up
// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (nums[i] in obj) return [obj[nums[i]], i];
    obj[diff] = i;
  }
};
